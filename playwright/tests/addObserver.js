function addObserver() {
    console.log('this is being executed');
    window.longtasks = [];
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // `entry` is a PerformanceEntry instance.
        longtasks.push([entry.attribution[0].containerSrc, entry.attribution[0].containerType, entry.attribution[0].name]);
        console.log(entry.entryType);
        console.log(entry.startTime); // DOMHighResTimeStamp
        console.log(entry.duration); // DOMHighResTimeStamp
      }
    });
    // Start observing the entry types you care about.
    observer.observe({entryTypes: ['longtask']});
};

addObserver();
