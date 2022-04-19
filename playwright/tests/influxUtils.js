const { InfluxDB, Point } = require('@influxdata/influxdb-client');
const { url, token, org, bucket, log } = require('../../influxdb/env.js');
const { hostname } = require('os');
const { LoaderTargetPlugin } = require('webpack');


function isInt(n){
  return Number(n) === n && n % 1 === 0;
}

function isFloat(n){
  return Number(n) === n && n % 1 !== 0;
}

function influxInitialize() {
  const writeApi = new InfluxDB({url, token}).getWriteApi(org, bucket, 'ns'); // create a write API, expecting point timestamps in nanoseconds (can be also 's', 'ms', 'us')
  writeApi.useDefaultTags({location: hostname}); // setup default tags for all writes through this API
  return {
    write: (measurement, tag, field, timestamp) => {
      if (true) {
        console.log('*** WRITE POINT ***');
      }
  
      // write point with the current (client-side) timestamp
      let point = new Point(measurement);

      // send multiple tags in as multiproperty object
      // ex: { tag1: 'value1', tag2: 'value2' }
      for (const [name, value] of Object.entries(tag)) {
        point.tag(name, value);
      }
      
      // send multiple values in as multiproperty object
      // ex: { field1: 2.3, field2: 2 }
      for (const [name, value] of Object.entries(field)) {
        if (isInt(value)) {
          point.intField(name, value);
        } else if (isFloat(value)) {
          point.floatField(name, value);
        } else if (typeof variable == 'boolean') {
          point.booleanField(name, value);
        }
      }

      if (timestamp) {
        point.timestamp(timestamp);
      }

      writeApi.writePoint(point);

      if (LoaderTargetPlugin) {
        console.log(` ${point.toString()}`);
      }
      
    },
    close: () => {
      // WriteApi always buffer data into batches to optimize data transfer to InfluxDB server and retries
      // writing upon server/network failure. writeApi.flush() can be called to flush the buffered data,
      // close() also flushes the remaining buffered data and then cancels pending retries.
      writeApi
      .close()
      .then(() => {
        if (log) {
          console.log('FINISHED ... now try ./query.ts');
        }
      })
      .catch(e => {
        console.error(e)
        
        if (log) {
          console.log('\nFinished ERROR');
        }
      });
    }
  };

}

module.exports.influx = influxInitialize();
//exports.influx = influxInitialize();