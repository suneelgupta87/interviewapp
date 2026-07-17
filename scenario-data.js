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
"Tell me about yourself": {
    "answer": `
    <p>
Hi, my name is Suneel Kumar Gupta, and I have over 12 years of experience in software development,
primarily in Microsoft technologies.<br>

Currently, I am working as a Technical Lead at Coforge for a US-based client in the
Wealth Management domain.<br>

Throughout my career, I have worked extensively with ASP.NET, .NET Core Web API,
 C#, SQL Server, Entity Framework, Angular, Azure,REST APIs. I have also worked with CI/CD tools
  like Jenkins, Bitbucket, Octopus to automate build and deployment process.<br>
    </p>

    <p>
       My Current application is web-based application used by retirement plan administrators
        to manage participants, 
        retirement accounts, pension payments, lump-sum distributions, tax reporting, 
        and beneficiary information. <br>

        The application integrates with multiple internal systems and external services to 
        process retirement-related transactions securely and accurately.<br>

The application was originally built using ASP.NET Web Forms, VB6 components, Oracle, SQL Server, 
WCF Services, and SSIS packages. As part of modernization, 
we are upgrading and migrating various modules to latest technologies.

    </p>

    <p><strong>My Responsibilities</strong></p>
    <p>
My Responsibilties in current project is- <br> Understanding business requirements and participating in technical discussions.<br>
Designing and developing new features using ASP.NET, .NET Core Web API, Angular, and SQL Server.<br>
Participating in sprint planning, effort estimation,change analysis, daily stand-ups calls, and release activities. <br>
Performing code reviews and ensuring coding standards are followed. <br>
Fixing production issues and providing root cause analysis. <br>
Working closely with QA, Business Analysts, and stack holder during Agile sprints. <br>
Also involevd in managing CI/CD pipelins/ Performing Unit testing/ running sonarqubes for code quality,database optimization, 
Preparing Technical Design Documnet other release related user documentation.
</p>

    `
},
"Why migration matters?":{
    "answer":`
<strong>Security and support:</strong> VB6 reached end‑of‑life long ago and receives no security patches, exposing you to unpatched vulnerabilities. 
<br>
<strong>Compatibility and platform risk: </strong>VB6 is 32‑bit only and relies on legacy COM components that are increasingly incompatible with modern 64‑bit OS, containers, and cloud platforms. 
<br>
<strong>Developer availability and cost:</strong> VB6 skill pool is shrinking (many experienced VB6 devs are retiring), making maintenance expensive and risky. 
<br>
<strong>Integration and innovation limits:</strong> Legacy code blocks REST/OAuth, cloud services, microservices, and AI/analytics integration that competitors use. 
<br>
<strong>Maintainability and testing:</strong> Modern frameworks (C#/.NET Core) enable automated testing, CI/CD, and clearer architecture, lowering long‑term maintenance cost.
    `
},
"Multiple users update the same record simultaneously. How would you handle concurrency in Entity Framework Core?": {
    "answer": `
    <p>
        When multiple users update the same record simultaneously, a
        <strong>concurrency conflict</strong> can occur, where one user's
        changes overwrite another user's changes.
    </p>

    <p>
        In <strong>Entity Framework Core</strong>, the recommended approach is
        <strong>Optimistic Concurrency</strong> using a
        <strong>RowVersion (Timestamp)</strong> column. EF Core compares the
        original RowVersion with the current RowVersion in the database before
        updating the record.
    </p>

    <p><strong>Optimistic Concurrency Flow</strong></p>

    <pre><code class="language-text">
User A            User B
   │                 │
Read Employee    Read Employee
(RowVersion = 1) (RowVersion = 1)
   │                 │
Update Salary    Update Name
   │                 │
Save Changes     Save Changes
   │                 │
Success          RowVersion Changed
                     │
                     ▼
           DbUpdateConcurrencyException
    </code></pre>

    <p><strong>Entity Example</strong></p>

    <pre><code class="language-csharp">
public class Employee
{
    public int Id { get; set; }

    public string Name { get; set; }

    public decimal Salary { get; set; }

    [Timestamp]
    public byte[] RowVersion { get; set; }
}
    </code></pre>

    <p><strong>Generated SQL</strong></p>

    <pre><code class="language-sql">
UPDATE Employee
SET Salary = @Salary
WHERE Id = @Id
AND RowVersion = @RowVersion;
    </code></pre>

    <p>
        If no row is updated, it means another user has already modified the
        record, and EF Core throws a
        <strong>DbUpdateConcurrencyException</strong>.
    </p>

    <p><strong>Handling the Exception</strong></p>

    <pre><code class="language-csharp">
try
{
    await context.SaveChangesAsync();
}
catch (DbUpdateConcurrencyException)
{
    // Reload data or notify the user
}
    </code></pre>

    <p><strong>Ways to Resolve a Conflict</strong></p>

    <ul>
        <li>Reload the latest data and ask the user to retry.</li>
        <li>Merge the user's changes with the latest values.</li>
        <li>Allow the user to overwrite the existing data (if business rules permit).</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        In an HR application, two managers edit the same employee record. Manager
        A updates the salary and saves successfully. Manager B, who opened the
        record earlier, tries to save a department change. Since the RowVersion
        has changed, EF Core throws a concurrency exception, preventing Manager
        B from accidentally overwriting Manager A's update.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        In EF Core, concurrent updates are typically handled using Optimistic
        Concurrency with a RowVersion (Timestamp) column. EF Core compares the
        RowVersion during update and throws a DbUpdateConcurrencyException if
        another user has already modified the record.
    </div>
    `
},
"A Web API suddenly becomes slow after deployment. How would you investigate and resolve the issue?": {
    "answer": `
    <p>
        If a Web API suddenly becomes slow after deployment, I follow a
        structured troubleshooting approach instead of making assumptions.
        I first identify whether the bottleneck is in the application,
        database, infrastructure, or external dependencies.
    </p>

    <p><strong>Troubleshooting Flow</strong></p>

    <pre><code class="language-text">
Slow Web API
      │
      ▼
Collect Metrics
      │
      ▼
Check Application Logs
      │
      ▼
Check Database Performance
      │
      ▼
Check External APIs
      │
      ▼
Check Infrastructure
(CPU, Memory, Network)
      │
      ▼
Identify Root Cause
      │
      ▼
Apply Fix & Monitor
    </code></pre>

    <p><strong>Step 1 - Verify the Deployment</strong></p>

    <ul>
        <li>Confirm only the latest code was deployed.</li>
        <li>Verify environment variables and configuration.</li>
        <li>Check connection strings and application settings.</li>
    </ul>

    <p><strong>Step 2 - Check Application Logs</strong></p>

    <ul>
        <li>Review application logs for exceptions.</li>
        <li>Check Application Insights, Serilog, or other logging tools.</li>
        <li>Measure API response times.</li>
    </ul>

    <p><strong>Step 3 - Analyze Database Performance</strong></p>

    <ul>
        <li>Identify slow SQL queries.</li>
        <li>Check execution plans.</li>
        <li>Look for missing indexes.</li>
        <li>Check blocking and deadlocks.</li>
    </ul>

    <p><strong>Step 4 - Check External Dependencies</strong></p>

    <ul>
        <li>Verify third-party API response times.</li>
        <li>Check Redis or cache availability.</li>
        <li>Verify message queues and downstream services.</li>
    </ul>

    <p><strong>Step 5 - Check Infrastructure</strong></p>

    <ul>
        <li>CPU utilization.</li>
        <li>Memory usage.</li>
        <li>Thread pool exhaustion.</li>
        <li>Network latency.</li>
        <li>Disk I/O.</li>
    </ul>

    <p><strong>Common Fixes</strong></p>

    <ul>
        <li>Optimize slow SQL queries.</li>
        <li>Add missing indexes.</li>
        <li>Implement caching.</li>
        <li>Reduce unnecessary database calls.</li>
        <li>Use asynchronous programming.</li>
        <li>Increase application resources if required.</li>
        <li>Rollback the deployment if the issue was introduced by the latest release.</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        After a deployment, an Orders API response time increased from 500 ms to
        8 seconds. Using Application Insights, we identified that a new query was
        performing a table scan. After adding the appropriate index and updating
        the query, the response time dropped back below one second.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        I investigate a slow Web API by following a systematic approach:
        verify the deployment, analyze application logs, profile database
        queries, check external dependencies and infrastructure metrics, identify
        the bottleneck, implement the appropriate fix, and monitor the API to
        ensure the issue is resolved.
    </div>
    `
},
"Your application receives thousands of requests per minute. How would you improve scalability?": {
    "answer": `
    <p>
        When an application receives thousands of requests per minute, the goal
        is to handle the increased load without affecting performance,
        reliability, or user experience. I first identify the bottleneck and
        then scale the appropriate layer of the application.
    </p>

    <p><strong>Scalability Strategy</strong></p>

    <pre><code class="language-text">
High Traffic
      │
      ▼
Load Balancer
      │
      ▼
Multiple API Instances
      │
      ▼
Caching Layer
      │
      ▼
Database
      │
      ▼
Background Processing
    </code></pre>

    <p><strong>Techniques to Improve Scalability</strong></p>

    <ul>
        <li>Implement Horizontal Scaling by running multiple API instances behind a Load Balancer.</li>
        <li>Use Redis or Memory Cache to reduce repeated database queries.</li>
        <li>Optimize SQL queries and create proper indexes.</li>
        <li>Use asynchronous programming (async/await) to avoid blocking threads.</li>
        <li>Move long-running tasks to background processing using Azure Service Bus, RabbitMQ, or Azure Functions.</li>
        <li>Use pagination instead of loading large datasets.</li>
        <li>Implement rate limiting to protect the API from excessive traffic.</li>
        <li>Use Connection Pooling for efficient database connections.</li>
        <li>Monitor application performance using Application Insights.</li>
    </ul>

    <p><strong>Real-Time Architecture</strong></p>

    <pre><code class="language-text">
Users
   │
   ▼
Load Balancer
   │
 ┌─┴─────────────┐
 │               │
API Instance 1  API Instance 2
 │               │
 └──────┬────────┘
        ▼
      Redis Cache
        │
        ▼
     SQL Server
        │
        ▼
Azure Service Bus
        │
        ▼
Background Worker
    </code></pre>

    <p><strong>Best Practices</strong></p>

    <ul>
        <li>Design stateless APIs.</li>
        <li>Use distributed caching.</li>
        <li>Avoid unnecessary database calls.</li>
        <li>Implement retry policies for transient failures.</li>
        <li>Continuously monitor CPU, memory, response time, and throughput.</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        In an e-commerce application during a festive sale, traffic increased
        significantly. We deployed multiple API instances behind a load balancer,
        cached frequently accessed product data in Redis, moved email
        notifications to Azure Service Bus with background processing, and
        optimized SQL queries with proper indexing. This reduced database load
        and maintained fast API response times under heavy traffic.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        To improve scalability, I design stateless APIs, scale horizontally using
        multiple API instances behind a load balancer, reduce database load with
        caching, optimize SQL queries, process long-running tasks asynchronously,
        and continuously monitor system performance.
    </div>
    `
},
"A JWT token expires while the user is actively using the application. How would you implement refresh tokens securely?": {
    "answer": `
    <p>
        JWT access tokens are usually short-lived (for example, 15–30 minutes)
        for security reasons. To avoid forcing users to log in again when the
        access token expires, we use a <strong>Refresh Token</strong>.
    </p>

    <p>
        When the access token expires, the client sends the refresh token to a
        secure API endpoint. If the refresh token is valid, the server issues a
        new access token and a new refresh token.
    </p>

    <p><strong>Authentication Flow</strong></p>

    <pre><code class="language-text">
User Login
     │
     ▼
API
     │
     ▼
Access Token (15 min)
Refresh Token (7-30 days)
     │
     ▼
User Calls API
     │
Access Token Expired
     │
     ▼
Send Refresh Token
     │
     ▼
Validate Refresh Token
     │
     ▼
Issue New Access Token
Issue New Refresh Token
     │
     ▼
Continue Request
    </code></pre>

    <p><strong>Secure Implementation</strong></p>

    <ul>
        <li>Keep the access token short-lived.</li>
        <li>Store the refresh token securely in an HttpOnly, Secure cookie.</li>
        <li>Store refresh tokens in the database (preferably hashed).</li>
        <li>Rotate the refresh token after every successful refresh request.</li>
        <li>Revoke refresh tokens during logout or when suspicious activity is detected.</li>
        <li>Always use HTTPS.</li>
    </ul>

    <p><strong>Database Example</strong></p>

    <pre><code class="language-text">
UserId
RefreshToken
ExpiryDate
IsRevoked
CreatedDate
    </code></pre>

    <p><strong>Refresh Endpoint</strong></p>

    <pre><code class="language-text">
POST /api/auth/refresh-token

Request
--------
Refresh Token

Response
---------
New Access Token
New Refresh Token
    </code></pre>

    <p><strong>Angular Flow</strong></p>

    <ul>
        <li>HTTP Interceptor detects a 401 Unauthorized response.</li>
        <li>Calls the Refresh Token API.</li>
        <li>Receives new tokens.</li>
        <li>Retries the original request automatically.</li>
        <li>If refresh fails, redirects the user to the login page.</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        A user is filling a long insurance claim form for 40 minutes. The access
        token expires after 15 minutes, but the refresh token remains valid. The
        Angular interceptor silently requests new tokens and retries the failed
        API call, allowing the user to continue without losing work.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        I use short-lived JWT access tokens and long-lived refresh tokens.
        When the access token expires, the client securely exchanges the refresh
        token for a new access token and a rotated refresh token. Refresh tokens
        are stored securely, validated on the server, and revoked when necessary.
    </div>
    `
},
"Your application needs to send thousands of emails without affecting response time. What architecture would you use?": {
    "answer": `
    <p>
        Sending thousands of emails directly from the Web API is not recommended
        because email sending is a <strong>slow I/O operation</strong>. If the API
        waits for every email to be sent, the response time increases and the API
        becomes less scalable.
    </p>

    <p>
        Instead, I would use an <strong>asynchronous, message-based architecture</strong>
        using a message queue such as <strong>Azure Service Bus</strong> or
        <strong>RabbitMQ</strong>.
    </p>

    <p><strong>Architecture Flow</strong></p>

    <pre><code class="language-text">
Client
   │
   ▼
.NET Web API
   │
Save Order
   │
Publish Email Message
   │
   ▼
Azure Service Bus Queue
   │
   ▼
Azure Function / Worker Service
   │
Generate Email
   │
   ▼
SMTP / SendGrid
   │
   ▼
Customer Receives Email
    </code></pre>

    <p><strong>Implementation Steps</strong></p>

    <ul>
        <li>API completes the business transaction (Order, Registration, etc.).</li>
        <li>API publishes an email message to Azure Service Bus.</li>
        <li>API immediately returns a success response to the client.</li>
        <li>An Azure Function or Background Worker listens to the queue.</li>
        <li>The worker sends the email independently.</li>
        <li>If sending fails, the message is retried automatically.</li>
    </ul>

    <p><strong>Why This Architecture?</strong></p>

    <ul>
        <li>API response is very fast.</li>
        <li>Email processing is asynchronous.</li>
        <li>Easy to scale by adding more workers.</li>
        <li>Supports automatic retry and dead-letter queues.</li>
        <li>Improves reliability and fault tolerance.</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        In an e-commerce application, after an order is placed, the API stores
        the order in the database and publishes an email request to Azure Service
        Bus. The customer receives an immediate success response, while an Azure
        Function processes the queue and sends the order confirmation email in
        the background. During high traffic, multiple Azure Function instances
        can process messages in parallel without affecting API performance.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        I would use an asynchronous message-based architecture where the API
        publishes email requests to Azure Service Bus or RabbitMQ, and a
        background worker or Azure Function sends the emails. This keeps the API
        responsive, improves scalability, and provides retry capabilities.
    </div>
    `
},
"12. A production bug occurs that you can't reproduce locally. How would you troubleshoot it?": {
    "answer": `
    <p>
        When a production issue cannot be reproduced locally, I avoid making
        assumptions. Instead, I follow a structured troubleshooting approach to
        identify the root cause using production logs, monitoring tools, and
        environment comparisons.
    </p>

    <p><strong>Troubleshooting Flow</strong></p>

    <pre><code class="language-text">
Production Issue
      │
      ▼
Collect Error Details
      │
      ▼
Check Logs & Monitoring
      │
      ▼
Compare Production
with Local Environment
      │
      ▼
Analyze Database &
External Services
      │
      ▼
Reproduce in Staging
      │
      ▼
Identify Root Cause
      │
      ▼
Fix, Deploy & Monitor
    </code></pre>

    <p><strong>Step 1 - Gather Information</strong></p>

    <ul>
        <li>Identify the API or feature affected.</li>
        <li>Capture the exact error message.</li>
        <li>Determine whether all users or only specific users are affected.</li>
        <li>Check when the issue started.</li>
    </ul>

    <p><strong>Step 2 - Review Logs & Monitoring</strong></p>

    <ul>
        <li>Check Application Insights, Serilog, or other centralized logs.</li>
        <li>Review exception details and stack traces.</li>
        <li>Use Correlation IDs to trace the request across services.</li>
    </ul>

    <p><strong>Step 3 - Compare Environments</strong></p>

    <ul>
        <li>Compare appsettings and environment variables.</li>
        <li>Verify database connection strings.</li>
        <li>Check .NET runtime, package versions, and configuration differences.</li>
    </ul>

    <p><strong>Step 4 - Check Dependencies</strong></p>

    <ul>
        <li>Verify SQL Server performance.</li>
        <li>Check third-party APIs.</li>
        <li>Review cache, queues, and storage services.</li>
    </ul>

    <p><strong>Step 5 - Reproduce in Staging</strong></p>

    <ul>
        <li>Restore production-like data (after masking sensitive information).</li>
        <li>Use the same configuration as production.</li>
        <li>Debug and identify the root cause.</li>
    </ul>

    <p><strong>Best Practices</strong></p>

    <ul>
        <li>Do not debug directly in production.</li>
        <li>Use structured logging.</li>
        <li>Log Correlation IDs.</li>
        <li>Implement health checks and monitoring.</li>
        <li>Add unit and integration tests after fixing the issue.</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        In one project, a production API occasionally returned HTTP 500 errors,
        but the issue never occurred locally. Application Insights showed the
        failures happened only for requests containing null values from a
        third-party API. We reproduced the issue in the staging environment,
        added proper null validation, deployed the fix, and verified the solution
        through production monitoring.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        When a production issue cannot be reproduced locally, I rely on logs,
        monitoring, environment comparison, dependency analysis, and staging
        validation to identify the root cause before deploying a verified fix.
    </div>
    `
},
"How would you implement caching to reduce database load?": {
    "answer": `
    <p>
        <strong>Caching</strong> improves application performance by storing
        frequently accessed data in memory so that repeated requests do not
        always hit the database.
    </p>

    <p>
        The general approach is to check the cache first. If the data exists,
        return it immediately (Cache Hit). Otherwise, retrieve it from the
        database, store it in the cache, and then return it (Cache Miss).
    </p>

    <p><strong>Caching Flow</strong></p>

    <pre><code class="language-text">
Client
   │
   ▼
.NET Web API
   │
Check Cache
   │
 ┌─┴─────────────┐
 │               │
Cache Hit    Cache Miss
 │               │
 ▼               ▼
Return Data   SQL Server
                  │
                  ▼
            Store in Cache
                  │
                  ▼
             Return Data
    </code></pre>

    <p><strong>Types of Caching</strong></p>

    <ul>
        <li><strong>In-Memory Cache</strong> - Suitable for single-server applications.</li>
        <li><strong>Distributed Cache (Redis)</strong> - Suitable for multiple API instances.</li>
        <li><strong>Response Caching</strong> - Caches complete HTTP responses.</li>
        <li><strong>Output Caching (.NET 7+)</strong> - Caches API responses with configurable policies.</li>
    </ul>

    <p><strong>Example - IMemoryCache</strong></p>

    <pre><code class="language-csharp">
if (!_cache.TryGetValue("products", out List&lt;Product&gt; products))
{
    products = await _context.Products.ToListAsync();

    _cache.Set(
        "products",
        products,
        TimeSpan.FromMinutes(10));
}

return products;
    </code></pre>

    <p><strong>What Should Be Cached?</strong></p>

    <ul>
        <li>Product catalog.</li>
        <li>Country and state lists.</li>
        <li>Configuration data.</li>
        <li>Reference/master data.</li>
        <li>Frequently accessed read-only data.</li>
    </ul>

    <p><strong>Cache Invalidation</strong></p>

    <ul>
        <li>Remove or update the cache after Insert, Update, or Delete operations.</li>
        <li>Use expiration policies (Absolute or Sliding Expiration).</li>
        <li>For distributed systems, invalidate Redis when data changes.</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        In an e-commerce application, the product catalog is requested thousands
        of times every minute. Instead of querying SQL Server for every request,
        the product list is stored in Redis for 10 minutes. This significantly
        reduces database load and improves API response time.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        I implement the Cache-Aside pattern by checking the cache before querying
        the database. On a cache miss, I load the data from the database, store
        it in the cache, and return it. I also implement proper cache
        invalidation and use Redis for distributed applications.
    </div>
    `
},
"Your application must support multiple tenants (companies) using the same database. How would you design it?": {
    "answer": `
    <p>
        A <strong>Multi-Tenant Application</strong> allows multiple companies
        (tenants) to use the same application while ensuring that each tenant
        can access only its own data.
    </p>

    <p>
        For a shared database approach, I would use a
        <strong>TenantId</strong> column in every business table and filter all
        queries based on the logged-in user's TenantId.
    </p>

    <p><strong>Architecture Flow</strong></p>

    <pre><code class="language-text">
Company A User
        │
Company B User
        │
        ▼
Authentication
        │
JWT Contains TenantId
        │
        ▼
.NET Web API
        │
Global Tenant Filter
        │
        ▼
Shared Database
        │
 ┌──────┴────────┐
 │               │
TenantId = 1   TenantId = 2
    </code></pre>

    <p><strong>Database Design</strong></p>

    <pre><code class="language-sql">
Customers
----------------------------
CustomerId
TenantId
Name
Email

Orders
----------------------------
OrderId
TenantId
CustomerId
Amount
    </code></pre>

    <p><strong>EF Core Global Query Filter</strong></p>

    <pre><code class="language-csharp">
modelBuilder.Entity&lt;Customer&gt;()
    .HasQueryFilter(x =>
        x.TenantId == _tenantProvider.TenantId);
    </code></pre>

    <p>
        This automatically filters all queries so that users can only access
        data belonging to their own tenant.
    </p>

    <p><strong>Authentication</strong></p>

    <ul>
        <li>Store TenantId as a claim in the JWT token.</li>
        <li>Extract TenantId from the authenticated user.</li>
        <li>Use the TenantId in every database operation.</li>
    </ul>

    <p><strong>Best Practices</strong></p>

    <ul>
        <li>Add TenantId to every business table.</li>
        <li>Create composite indexes including TenantId.</li>
        <li>Never trust TenantId sent by the client.</li>
        <li>Use Global Query Filters to avoid accidental data leakage.</li>
        <li>Validate TenantId on Insert, Update, and Delete operations.</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        Suppose the application is used by Company A and Company B. Both
        companies share the same database, but every row contains a TenantId.
        When a user from Company A logs in, the JWT contains TenantId = 1, and
        all queries automatically return only records where TenantId = 1.
        Company B's data remains completely isolated.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        For a shared database multi-tenant application, I store a TenantId in
        every business table, include TenantId in the JWT token, enforce
        filtering using EF Core Global Query Filters, and validate TenantId on
        every data operation to ensure complete tenant isolation.
    </div>
    `
},
"How would you implement Role-Based Access Control (RBAC) in an ASP.NET Core application?": {
    "answer": `
    <p>
        <strong>Role-Based Access Control (RBAC)</strong> is an authorization
        mechanism where users are assigned one or more roles, and access to
        application resources is granted based on those roles.
    </p>

    <p>
        In ASP.NET Core, RBAC is commonly implemented using
        <strong>JWT Authentication</strong>, <strong>Role Claims</strong>, and
        the <strong>[Authorize]</strong> attribute.
    </p>

    <p><strong>RBAC Flow</strong></p>

    <pre><code class="language-text">
User Login
     │
     ▼
Validate Credentials
     │
     ▼
Load User Roles
(Admin, Manager, User)
     │
     ▼
Generate JWT Token
(Role Claims)
     │
     ▼
Client Calls API
     │
     ▼
JWT Authentication
     │
     ▼
[Authorize(Roles = "...")]
     │
 ┌───┴─────────┐
 │             │
Access      Access
Granted     Denied
    </code></pre>

    <p><strong>Database Design</strong></p>

    <pre><code class="language-text">
Users
------
UserId
UserName

Roles
------
RoleId
RoleName

UserRoles
---------
UserId
RoleId
    </code></pre>

    <p><strong>Add Role Claim to JWT</strong></p>

    <pre><code class="language-csharp">
new Claim(ClaimTypes.Role, "Admin");
    </code></pre>

    <p><strong>Protect API Endpoint</strong></p>

    <pre><code class="language-csharp">
[Authorize(Roles = "Admin")]
[HttpGet]
public IActionResult GetUsers()
{
    return Ok();
}
    </code></pre>

    <p><strong>Multiple Roles</strong></p>

    <pre><code class="language-csharp">
[Authorize(Roles = "Admin,Manager")]
    </code></pre>

    <p><strong>Best Practices</strong></p>

    <ul>
        <li>Store roles in the database.</li>
        <li>Include roles as claims in the JWT.</li>
        <li>Use role-based authorization at the controller or action level.</li>
        <li>Combine RBAC with Policy-Based Authorization when business rules become more complex.</li>
        <li>Follow the Principle of Least Privilege.</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        In an HR application, Employees can view their own profile, Managers can
        approve leave requests, and Admins can manage users and roles. After
        login, the user's role is included in the JWT. ASP.NET Core validates the
        token and allows access only to endpoints permitted for that role.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        I implement RBAC using JWT authentication, role claims, and the
        Authorize attribute. User roles are stored in the database, added as
        claims to the JWT during login, and validated by ASP.NET Core before
        granting access to protected APIs.
    </div>
    `
},
"A deployment fails after reaching production. How would you perform a rollback with minimal downtime?": {
    "answer": `
    <p>
        If a deployment fails in production, the priority is to restore the
        application as quickly as possible while minimizing downtime and user
        impact. The safest approach is to use a <strong>rollback strategy</strong>
        through the CI/CD pipeline instead of making manual changes on the server.
    </p>

    <p><strong>Rollback Flow</strong></p>

    <pre><code class="language-text">
Deploy New Version
        │
        ▼
Health Checks
        │
   ┌────┴─────┐
   │          │
Healthy    Failure
   │          │
   ▼          ▼
Keep Live  Rollback
                │
                ▼
Previous Stable Version
                │
                ▼
Monitor Application
    </code></pre>

    <p><strong>Rollback Steps</strong></p>

    <ul>
        <li>Identify the deployment failure using monitoring and logs.</li>
        <li>Stop routing traffic to the failed version.</li>
        <li>Redeploy the last stable build using the CI/CD pipeline.</li>
        <li>Verify application health and critical APIs.</li>
        <li>Continue monitoring after rollback.</li>
    </ul>

    <p><strong>Best Practices</strong></p>

    <ul>
        <li>Keep previous production artifacts available for quick rollback.</li>
        <li>Use Blue-Green or Rolling Deployment strategies.</li>
        <li>Run health checks before switching traffic.</li>
        <li>Version both application code and database scripts.</li>
        <li>Ensure database migrations are backward compatible.</li>
    </ul>

    <p><strong>Database Considerations</strong></p>

    <ul>
        <li>Avoid destructive schema changes during deployment.</li>
        <li>Use backward-compatible migrations.</li>
        <li>Have rollback scripts ready for database changes if required.</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        After deploying a new version of an Order API, health checks began
        failing because of a configuration issue. The deployment pipeline
        immediately routed traffic back to the previous stable version. The
        application was restored within minutes, users experienced minimal
        downtime, and the issue was investigated before attempting another
        deployment.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        I perform rollbacks using the CI/CD pipeline by switching traffic back
        to the last stable version, validating application health, and ensuring
        database changes are backward compatible to minimize downtime and user
        impact.
    </div>
    `
},
"How would you design a logging and monitoring strategy for a production application?": {
    "answer": `
    <p>
        A production application should have a comprehensive
        <strong>logging and monitoring strategy</strong> to quickly detect,
        diagnose, and resolve issues. The goal is to provide complete visibility
        into application behavior, performance, and failures.
    </p>

    <p><strong>Monitoring Architecture</strong></p>

    <pre><code class="language-text">
Users
   │
   ▼
.NET Web API
   │
Structured Logging
(Serilog / ILogger)
   │
   ▼
Application Insights
   │
   ├── Exceptions
   ├── Requests
   ├── Dependencies
   ├── Performance
   └── Custom Logs
   │
   ▼
Dashboards & Alerts
   │
   ▼
Development Team
    </code></pre>

    <p><strong>What Should Be Logged?</strong></p>

    <ul>
        <li>Application startup and shutdown.</li>
        <li>Exceptions and stack traces.</li>
        <li>API requests and response times.</li>
        <li>Database queries and dependency calls.</li>
        <li>Authentication and authorization failures.</li>
        <li>Business events (Order Created, Payment Completed).</li>
        <li>Warning and critical events.</li>
    </ul>

    <p><strong>Log Levels</strong></p>

    <ul>
        <li><strong>Information</strong> - Normal application events.</li>
        <li><strong>Warning</strong> - Unexpected but recoverable situations.</li>
        <li><strong>Error</strong> - Request failures or exceptions.</li>
        <li><strong>Critical</strong> - Application or service failures.</li>
    </ul>

    <p><strong>Monitoring Metrics</strong></p>

    <ul>
        <li>API response time.</li>
        <li>Request throughput.</li>
        <li>CPU and memory usage.</li>
        <li>Database performance.</li>
        <li>Dependency failures.</li>
        <li>Error rate.</li>
        <li>Availability and uptime.</li>
    </ul>

    <p><strong>Best Practices</strong></p>

    <ul>
        <li>Use structured logging.</li>
        <li>Include Correlation IDs in every request.</li>
        <li>Never log passwords or sensitive information.</li>
        <li>Configure alerts for critical failures.</li>
        <li>Centralize logs in Application Insights or a log management platform.</li>
        <li>Implement Health Check endpoints.</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        In an e-commerce application, every API request receives a Correlation
        ID. When an order fails, Application Insights records the request,
        exception, SQL dependency, and response time. Developers use the
        Correlation ID to trace the complete request across multiple services,
        quickly identifying the root cause.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        I use structured logging with ILogger or Serilog, centralize logs in
        Application Insights, monitor key metrics such as response time,
        exceptions, dependencies, CPU, and memory, include Correlation IDs for
        request tracing, and configure alerts to proactively detect production
        issues.
    </div>
    `
},
"A user accidentally submits the same request multiple times. How would you prevent duplicate data?": {
    "answer": `
    <p>
        Duplicate requests can occur when users click the Submit button multiple
        times, refresh the page, or retry a request due to network issues.
        Preventing duplicate data requires protection at both the client and
        server sides.
    </p>

    <p><strong>Duplicate Request Prevention Flow</strong></p>

    <pre><code class="language-text">
User Clicks Submit
        │
        ▼
Disable Submit Button
        │
        ▼
API Receives Request
        │
        ▼
Validate Idempotency Key
        │
   ┌────┴─────┐
   │          │
New Request Duplicate Request
   │          │
   ▼          ▼
Save Data  Return Previous Result
    </code></pre>

    <p><strong>Techniques to Prevent Duplicates</strong></p>

    <ul>
        <li>Disable the Submit button after the first click.</li>
        <li>Generate an <strong>Idempotency Key</strong> for each request.</li>
        <li>Store processed Idempotency Keys in the database or cache.</li>
        <li>Enforce UNIQUE constraints where applicable.</li>
        <li>Validate business rules before inserting data.</li>
    </ul>

    <p><strong>Database Example</strong></p>

    <pre><code class="language-sql">
CREATE TABLE Payments
(
    PaymentId INT PRIMARY KEY,
    OrderId INT UNIQUE,
    Amount DECIMAL(10,2)
);
    </code></pre>

    <p><strong>Idempotency Flow</strong></p>

    <pre><code class="language-text">
Request
-------
Idempotency-Key:
12345-ABCDE

Server
------
Key Exists?
      │
 ┌────┴────┐
 │         │
No        Yes
 │         │
 ▼         ▼
Process   Return Existing Response
Request
    </code></pre>

    <p><strong>Best Practices</strong></p>

    <ul>
        <li>Implement idempotency for POST APIs handling payments or orders.</li>
        <li>Use database constraints as the final safety net.</li>
        <li>Store idempotency keys with an expiration time.</li>
        <li>Perform duplicate checks within a transaction.</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        In a payment application, if a user clicks the Pay button twice, the
        first request processes successfully and stores the Idempotency Key. The
        second request arrives with the same key, so the server returns the
        existing payment result instead of creating a second payment record.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        I prevent duplicate data by combining client-side protection such as
        disabling the Submit button with server-side idempotency, database
        unique constraints, and business validation to ensure each request is
        processed only once.
    </div>
    `
},
"How would you manage state across multiple Angular components?": {
    "answer": `
    <p>
        Managing state across multiple Angular components depends on the size
        and complexity of the application. For small applications, I use
        <strong>Services with RxJS BehaviorSubject</strong>. For large
        enterprise applications, I prefer <strong>NgRx Store</strong> for
        centralized state management.
    </p>

    <p><strong>State Management Flow</strong></p>

    <pre><code class="language-text">
Component A
      │
Update State
      │
      ▼
Angular Service
(BehaviorSubject)
      │
      ▼
Observable
      │
 ┌────┴─────┐
 │          │
 ▼          ▼
Component B Component C
    </code></pre>

    <p><strong>Using BehaviorSubject</strong></p>

    <ul>
        <li>Stores the latest value.</li>
        <li>Multiple components can subscribe to changes.</li>
        <li>Suitable for small and medium-sized applications.</li>
    </ul>

    <p><strong>Example</strong></p>

    <pre><code class="language-typescript">
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSource =
      new BehaviorSubject&lt;string&gt;('');

  user$ = this.userSource.asObservable();

  setUser(name: string) {
      this.userSource.next(name);
  }
}
    </code></pre>

    <p><strong>Using NgRx</strong></p>

    <ul>
        <li>Provides a centralized store.</li>
        <li>Uses Actions, Reducers, Effects, and Selectors.</li>
        <li>Suitable for large applications with complex shared state.</li>
    </ul>

    <p><strong>When to Use Which?</strong></p>

    <ul>
        <li><strong>BehaviorSubject</strong> - Shared state between a few related components.</li>
        <li><strong>NgRx</strong> - Complex applications with many modules and shared state.</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        In an e-commerce application, the shopping cart count appears in the
        header, product page, and checkout page. A shared service with a
        BehaviorSubject updates the cart count across all components
        automatically. For larger applications with many shared states, NgRx is
        a better choice.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        I manage shared state using Angular Services with BehaviorSubject for
        simple scenarios and NgRx Store for large applications that require
        centralized, predictable, and scalable state management.
    </div>
    `
},
"How would you implement lazy loading in Angular to improve performance?": {
    "answer": `
    <p>
        <strong>Lazy Loading</strong> is an Angular feature that loads feature
        modules only when they are required, instead of loading the entire
        application during startup.
    </p>

    <p>
        This reduces the initial bundle size, improves application startup
        time, and provides a better user experience, especially for large
        applications.
    </p>

    <p><strong>Lazy Loading Flow</strong></p>

    <pre><code class="language-text">
User Opens App
       │
       ▼
Load App Module
       │
       ▼
Home Module
       │
User Navigates
to Admin
       │
       ▼
Load Admin Module
(On Demand)
    </code></pre>

    <p><strong>Configure Routing</strong></p>

    <pre><code class="language-typescript">
const routes: Routes = [
{
    path: 'admin',
    loadChildren: () =>
        import('./admin/admin.module')
        .then(m => m.AdminModule)
}
];
    </code></pre>

    <p><strong>Admin Routing Module</strong></p>

    <pre><code class="language-typescript">
const routes: Routes = [
{
    path: '',
    component: AdminComponent
}
];
    </code></pre>

    <p><strong>Benefits</strong></p>

    <ul>
        <li>Reduces initial bundle size.</li>
        <li>Faster application startup.</li>
        <li>Loads modules only when required.</li>
        <li>Improves performance for large applications.</li>
        <li>Reduces network traffic during initial load.</li>
    </ul>

    <p><strong>Best Practices</strong></p>

    <ul>
        <li>Lazy load feature modules such as Admin, Reports, and Settings.</li>
        <li>Keep the AppModule lightweight.</li>
        <li>Combine lazy loading with preloading strategies for frequently used modules.</li>
        <li>Optimize bundle size using Angular production builds.</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        In an e-commerce application, the Home and Product modules are loaded
        during startup, while the Admin, Reports, and Order Management modules
        are loaded only when an administrator navigates to those sections.
        This significantly reduces the initial application load time.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        Lazy loading improves Angular performance by loading feature modules
        only when users navigate to them, reducing the initial bundle size,
        startup time, and overall application load.
    </div>
    `
},
"Your Angular application becomes slow as it grows. What optimization techniques would you apply?": {
    "answer": `
    <p>
        As an Angular application grows, performance can degrade due to larger
        bundles, unnecessary change detection, excessive API calls, and
        inefficient rendering. I would optimize the application at multiple
        levels, including rendering, change detection, lazy loading, caching,
        and bundle optimization.
    </p>

    <p><strong>Performance Optimization Flow</strong></p>

    <pre><code class="language-text">
Slow Angular App
        │
        ▼
Analyze Performance
        │
        ▼
Optimize Bundle Size
        │
        ▼
Lazy Loading
        │
        ▼
Optimize Change Detection
        │
        ▼
Reduce API Calls
        │
        ▼
Optimize Rendering
        │
        ▼
Monitor Performance
    </code></pre>

    <p><strong>Optimization Techniques</strong></p>

    <ul>
        <li>Implement Lazy Loading for feature modules.</li>
        <li>Use OnPush Change Detection to reduce unnecessary UI updates.</li>
        <li>Use trackBy with *ngFor to avoid unnecessary DOM recreation.</li>
        <li>Cache API responses using RxJS or HTTP caching.</li>
        <li>Use Async Pipe instead of manual subscriptions.</li>
        <li>Implement pagination or virtual scrolling for large lists.</li>
        <li>Remove unused libraries and optimize bundle size.</li>
        <li>Enable production build optimization.</li>
    </ul>

    <p><strong>Examples</strong></p>

    <p><strong>OnPush Change Detection</strong></p>

    <pre><code class="language-typescript">
@Component({
    changeDetection:
        ChangeDetectionStrategy.OnPush
})
    </code></pre>

    <p><strong>trackBy Function</strong></p>

    <pre><code class="language-typescript">
trackById(index: number, item: Product) {
    return item.id;
}
    </code></pre>

    <pre><code class="language-html">
&lt;div *ngFor="let item of products; trackBy: trackById"&gt;
&lt;/div&gt;
    </code></pre>

    <p><strong>Best Practices</strong></p>

    <ul>
        <li>Split the application into feature modules.</li>
        <li>Avoid unnecessary API requests.</li>
        <li>Use pure pipes where applicable.</li>
        <li>Avoid expensive computations inside templates.</li>
        <li>Monitor performance using Angular DevTools.</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        In an e-commerce application, the product page became slow because it
        rendered thousands of products and repeatedly recreated DOM elements.
        We implemented lazy loading, OnPush change detection, trackBy,
        virtual scrolling, and API caching. This significantly reduced page
        load time and improved the overall user experience.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        To optimize a large Angular application, I reduce the initial bundle
        size with lazy loading, minimize change detection using OnPush, improve
        rendering with trackBy and virtual scrolling, cache API responses, and
        build the application using production optimizations.
    </div>
    `
},
"How would you design a microservices-based application that needs secure communication between services?": {
    "answer": `
    <p>
        In a microservices architecture, services communicate over the network,
        so security is essential. I would secure both
        <strong>client-to-service</strong> and
        <strong>service-to-service</strong> communication using authentication,
        authorization, encryption, and API Gateway.
    </p>

    <p><strong>Architecture Flow</strong></p>

    <pre><code class="language-text">
Client
   │
JWT Token
   │
   ▼
API Gateway
   │
Authenticate & Authorize
   │
 ┌─┴──────────────┐
 │                │
 ▼                ▼
Order Service   Payment Service
 │                │
 └──────┬─────────┘
        ▼
Service-to-Service
Authentication
(JWT / Managed Identity)
        │
        ▼
Azure Service Bus
(HTTPS/TLS)
    </code></pre>

    <p><strong>Security Techniques</strong></p>

    <ul>
        <li>Use HTTPS/TLS for all communication.</li>
        <li>Authenticate users using JWT or OAuth 2.0.</li>
        <li>Use an API Gateway for centralized authentication, routing, and rate limiting.</li>
        <li>Authenticate service-to-service calls using Managed Identity, OAuth Client Credentials, or JWT.</li>
        <li>Store secrets in Azure Key Vault.</li>
        <li>Use RBAC and Policy-Based Authorization.</li>
        <li>Encrypt sensitive data at rest and in transit.</li>
    </ul>

    <p><strong>Asynchronous Communication</strong></p>

    <p>
        For event-driven communication, I would use Azure Service Bus or
        RabbitMQ. Messages are transmitted over secure channels, and only
        authorized services are allowed to publish or consume them.
    </p>

    <p><strong>Best Practices</strong></p>

    <ul>
        <li>Never expose internal microservices directly to clients.</li>
        <li>Validate JWT tokens at the API Gateway or service boundary.</li>
        <li>Implement least-privilege access.</li>
        <li>Use Correlation IDs for distributed tracing.</li>
        <li>Monitor requests using Application Insights.</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        In an e-commerce application, the client sends a JWT token to the API
        Gateway. After authentication, the gateway routes the request to the
        Order Service. The Order Service publishes an event to Azure Service Bus,
        which is consumed by the Inventory and Notification services. All
        communication occurs over HTTPS, secrets are stored in Azure Key Vault,
        and internal services authenticate each other before exchanging data.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        I secure microservices by placing an API Gateway in front of the
        services, using HTTPS, JWT or OAuth for authentication, secure
        service-to-service authentication, Azure Key Vault for secrets, and
        encrypted communication with centralized monitoring and distributed
        tracing.
    </div>
    `
},
};
