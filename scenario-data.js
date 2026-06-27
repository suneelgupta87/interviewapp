window.data = window.data || {};
window.data.SCENARIO = {
  "How would you handle database connection pool exhaustion in ASP.NET Core?": {
    "answer": `
    <p>
        <strong>Connection pool exhaustion</strong> occurs when all available
        database connections are in use and new requests cannot obtain a
        connection from the pool. As a result, requests start timing out and
        the application becomes slow or unavailable.
    </p>

    <p><strong>Common Causes:</strong></p>

    <ul>
        <li>Database connections are not disposed properly.</li>
        <li>Long-running SQL queries.</li>
        <li>Too many concurrent requests.</li>
        <li>Connection leaks.</li>
        <li>Blocking or deadlock issues.</li>
    </ul>

    <p><strong>Resolution Steps:</strong></p>

    <ul>
        <li>Identify slow queries using SQL Profiler or Application Insights.</li>
        <li>Ensure DbContext is registered as Scoped.</li>
        <li>Dispose connections properly using <code>using</code> statements.</li>
        <li>Optimize SQL queries and create indexes.</li>
        <li>Reduce unnecessary database calls using Redis Cache.</li>
        <li>Use asynchronous database operations.</li>
        <li>Increase connection pool size only after identifying the root cause.</li>
        <li>Monitor connection usage continuously.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        I first identify why the connection pool is exhausted, fix connection leaks or slow queries, optimize database usage, and only then consider increasing the connection pool size.
    </div>
    `
},
"High CPU Utilization with Low Traffic in ASP.NET Core": {
    "answer": `
    <p>
        If CPU utilization is very high even though application traffic is low,
        I would not restart the server immediately. First, I would identify
        which process is consuming the CPU and then determine the root cause
        before applying a fix.
    </p>

    <p><strong>Troubleshooting Steps:</strong></p>

    <ul>
        <li>Identify the process consuming high CPU using Task Manager or Performance Monitor.</li>
        <li>Check Application Insights for slow requests and dependency calls.</li>
        <li>Collect memory and CPU dumps if required.</li>
        <li>Review application logs for exceptions or infinite loops.</li>
        <li>Check SQL queries for long-running operations.</li>
        <li>Analyze thread dumps for blocked or busy threads.</li>
        <li>Check background services or scheduled jobs.</li>
        <li>Monitor garbage collection activity and memory usage.</li>
        <li>Review recent deployments and code changes.</li>
    </ul>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        After deployment, CPU usage increased to 95% while traffic remained low.
        Investigation showed a BackgroundService was polling the database every
        second due to a configuration issue. Increasing the polling interval and
        optimizing the background task reduced CPU usage to normal levels.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        I first identify which process is consuming CPU, then analyze logs,
        thread dumps, SQL queries, background services, and recent deployments
        to find the root cause before implementing a fix.
    </div>
    `
},
"An application is slow, how would you troubleshoot it?": {
    "answer": `
    <p>
        When an application is slow, I follow a structured approach to identify
        the bottleneck instead of making assumptions. I first determine whether
        the issue is on the <strong>Client (Angular)</strong>, the
        <strong>Network</strong>, the <strong>Backend API</strong>, or the
        <strong>Database</strong>.
    </p>

    <p><strong>Troubleshooting Flow</strong></p>

    <pre><code class="language-text">
User Reports Slow Application
          │
          ▼
Reproduce the Issue
          │
          ▼
Browser DevTools
(Network / Performance)
          │
          ▼
API Response Time
          │
          ▼
Backend Logs
          │
          ▼
Database Query Analysis
          │
          ▼
Identify Bottleneck
          │
          ▼
Implement Fix
          │
          ▼
Verify Performance
    </code></pre>

    <p><strong>Step 1 - Check Frontend (Angular)</strong></p>

    <ul>
        <li>Open Chrome DevTools and check the Network tab.</li>
        <li>Identify slow API calls.</li>
        <li>Check JavaScript execution time using the Performance tab.</li>
        <li>Inspect large bundle sizes.</li>
        <li>Verify unnecessary change detection cycles.</li>
        <li>Check for memory leaks and excessive subscriptions.</li>
    </ul>

    <p><strong>Step 2 - Check Network</strong></p>

    <ul>
        <li>Measure API latency.</li>
        <li>Check request and response payload sizes.</li>
        <li>Verify compression (Gzip/Brotli).</li>
        <li>Look for multiple unnecessary API calls.</li>
    </ul>

    <p><strong>Step 3 - Check Backend</strong></p>

    <ul>
        <li>Review application logs.</li>
        <li>Measure API execution time.</li>
        <li>Check external service dependencies.</li>
        <li>Verify caching implementation.</li>
    </ul>

    <p><strong>Step 4 - Check Database</strong></p>

    <ul>
        <li>Analyze execution plans.</li>
        <li>Identify missing indexes.</li>
        <li>Detect blocking or deadlocks.</li>
        <li>Optimize slow SQL queries.</li>
    </ul>

    <p><strong>Common Solutions</strong></p>

    <ul>
        <li>Enable lazy loading.</li>
        <li>Use OnPush change detection.</li>
        <li>Implement API and browser caching.</li>
        <li>Optimize SQL queries and indexes.</li>
        <li>Reduce API payload size.</li>
        <li>Load data asynchronously where possible.</li>
    </ul>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        I troubleshoot performance issues by isolating the bottleneck. I first
        check the Angular application using browser developer tools, then verify
        network latency, backend API performance, and finally analyze database
        queries and execution plans before implementing the appropriate fix.
    </div>
    `
},

};
