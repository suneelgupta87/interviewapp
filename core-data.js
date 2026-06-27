window.data = window.data || {};
window.data.core = {
 "Dependency Injection": {
    "answer": `
    <p>
        <strong>Dependency Injection (DI)</strong> is a built-in feature of
        ASP.NET Core that provides objects (dependencies) to a class instead
        of the class creating them directly. This promotes loose coupling,
        better testability, and easier maintenance.
    </p>

    <p>
        Services are registered in the <code>Program.cs</code> file using the
        built-in IoC (Inversion of Control) container and are injected into
        controllers, services, or other classes through constructor injection.
    </p>
    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        ASP.NET Core has a built-in Dependency Injection container where services are registered in <code>Program.cs</code> and injected through constructor injection.
    </div>
<p></p>
    `
},
  "What is middleware in ASP.NET Core?": {
    "answer": `
<h3>Answer</h3>
<p>
Middleware is a component that runs in the HTTP request pipeline and can inspect, modify, or short-circuit requests and responses.
</p>
`
  },
  "Service lifetimes in ASP.NET Core": {
    "answer": `
    <p>
        ASP.NET Core provides three service lifetimes for Dependency Injection:
        <strong>Transient</strong>, <strong>Scoped</strong>, and
        <strong>Singleton</strong>. The lifetime determines how long a service
        instance is created and reused.
    </p>

    <p><strong>Service Lifetimes:</strong></p>

    <ul>
        <li><strong>Transient</strong> - A new instance is created every time the service is requested.</li>
        <li><strong>Scoped</strong> - One instance is created per HTTP request and shared throughout that request.</li>
        <li><strong>Singleton</strong> - A single instance is created once and shared throughout the application's lifetime.</li>
    </ul>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li><strong>Transient</strong> - Lightweight, stateless services.</li>
        <li><strong>Scoped</strong> - Entity Framework DbContext, business services.</li>
        <li><strong>Singleton</strong> - Logging, configuration, caching, application-wide services.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        ASP.NET Core DI supports three service lifetimes: Transient (new instance every request), Scoped (one instance per HTTP request), and Singleton (one instance for the entire application).
    </div>
    `
},
  "Middleware": {
    "answer": `
    <p>
        <strong>Middleware</strong> is software that sits in the HTTP request
        processing pipeline of ASP.NET Core. It processes incoming requests
        before they reach the application and outgoing responses before they
        are sent back to the client.
    </p>

    <p>
        Each middleware component can perform an operation, pass the request
        to the next middleware, or terminate the request pipeline by returning
        a response.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Authentication and Authorization.</li>
        <li>Exception handling.</li>
        <li>Request and response logging.</li>
        <li>Serving static files.</li>
        <li>HTTPS redirection.</li>
        <li>Routing requests to controllers.</li>
        <li>CORS configuration.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Middleware is a component in the ASP.NET Core request pipeline that processes HTTP requests and responses before they reach the application or the client.
    </div>
    `
},
"Handle Garbage Collection in .net core": {
    "answer": `
    <p>
        <strong>ASP.NET Core</strong> relies on the <strong>.NET Garbage Collector (GC)</strong>
        to automatically manage memory. The Garbage Collector identifies objects that
        are no longer in use and releases their memory, reducing the need for manual
        memory management.
    </p>

    <p>
        The .NET Garbage Collector uses a <strong>Generational Garbage Collection</strong>
        approach, where objects are organized into <strong>Generation 0, Generation 1,
        and Generation 2</strong>. Most short-lived objects are collected quickly,
        while long-lived objects are collected less frequently to improve performance.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Automatically reclaiming unused memory.</li>
        <li>Preventing memory leaks caused by unused managed objects.</li>
        <li>Improving application performance through optimized memory management.</li>
        <li>Managing object lifetimes without manual memory deallocation.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        ASP.NET Core uses the .NET Garbage Collector (GC) to automatically manage memory by reclaiming unused objects using a generational garbage collection mechanism.
    </div>
    `
},
"How do you implement caching in ASP.NET Core?": {
    "answer": `
    <p>
        <strong>Caching</strong> is a technique used to temporarily store frequently
        accessed data in memory so that future requests can be served faster without
        repeatedly querying the database or calling external services.
    </p>

    <p>
        ASP.NET Core provides several caching mechanisms, with the most commonly used
        being <strong>In-Memory Cache (IMemoryCache)</strong>,
        <strong>Distributed Cache (IDistributedCache)</strong>, and
        <strong>Response Caching</strong>.
    </p>

    <p><strong>Types of Caching:</strong></p>

    <ul>
        <li><strong>IMemoryCache</strong> - Stores data in the application's memory. Suitable for single-server applications.</li>
        <li><strong>IDistributedCache</strong> - Stores data in a distributed cache such as Redis or SQL Server. Suitable for multi-server applications.</li>
        <li><strong>Response Caching</strong> - Caches HTTP responses to improve API performance.</li>
    </ul>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Caching frequently accessed database data.</li>
        <li>Reducing database load.</li>
        <li>Improving Web API response time.</li>
        <li>Caching product catalogs and lookup data.</li>
        <li>Storing session and user-specific data using Redis.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        ASP.NET Core supports caching using IMemoryCache, IDistributedCache, and Response Caching to improve application performance and reduce database load.
    </div>
    `
},
"Middleware and Filters in ASP.NET Core?": {
    "answer": `
    <p>
        Both <strong>Middleware</strong> and <strong>Filters</strong> are used to
        process requests in ASP.NET Core, but they execute at different stages of
        the request pipeline.
    </p>

    <p>
        <strong>Middleware</strong> executes before the request reaches the MVC
        pipeline and after the response leaves it. <strong>Filters</strong> execute
        only inside the MVC pipeline around controller actions.
    </p>

    <p><strong>Key Differences:</strong></p>

    <ul>
        <li><strong>Middleware</strong> → Executes for every HTTP request.</li>
        <li><strong>Filters</strong> → Execute only for MVC/Web API actions.</li>
        <li><strong>Middleware</strong> → Configured in <code>Program.cs</code>.</li>
        <li><strong>Filters</strong> → Applied to controllers or action methods.</li>
        <li><strong>Middleware</strong> → Used for Authentication, CORS, Logging, Exception Handling.</li>
        <li><strong>Filters</strong> → Used for Authorization, Action Validation, Exception Handling, Result Processing.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Middleware works at the application level for every request, whereas Filters work only within the MVC pipeline around controller actions.
    </div>
    `
},
"Explain the Request Processing Pipeline in ASP.NET Core": {
    "answer": `
    <p>
        The <strong>ASP.NET Core Request Processing Pipeline</strong> is a sequence
        of middleware components that process every incoming HTTP request and
        outgoing HTTP response. Each middleware can process the request, pass it
        to the next middleware, or terminate the pipeline.
    </p>

    <p>
        Middleware components are configured in <code>Program.cs</code> using methods
        such as <code>Use()</code>, <code>Run()</code>, and <code>Map()</code>.
        The order of middleware is important because each request passes through
        them sequentially.
    </p>

    <p><strong>Common Middleware:</strong></p>

    <ul>
        <li>Exception Handling</li>
        <li>HTTPS Redirection</li>
        <li>Static Files</li>
        <li>Routing</li>
        <li>Authentication</li>
        <li>Authorization</li>
        <li>Endpoint Mapping (Controllers)</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        The ASP.NET Core request pipeline is a sequence of middleware components that process HTTP requests and responses before and after they reach the controller.
    </div>
    `
},
"Explain Session and State Management options in ASP.NET Core": {
    "answer": `
    <p>
        <strong>State Management</strong> is the technique used to preserve user
        data across multiple HTTP requests. Since HTTP is a stateless protocol,
        ASP.NET Core provides several mechanisms to maintain application and user state.
    </p>

    <p>
        <strong>Session</strong> stores user-specific data on the server and maintains
        it across multiple requests using a unique Session ID stored in a cookie.
    </p>

    <p><strong>State Management Options:</strong></p>

    <ul>
        <li><strong>Session</strong> - Stores user-specific data on the server.</li>
        <li><strong>Cookies</strong> - Stores small amounts of data in the browser.</li>
        <li><strong>TempData</strong> - Stores data for one subsequent request.</li>
        <li><strong>ViewData</strong> - Passes data from Controller to View.</li>
        <li><strong>ViewBag</strong> - Dynamic wrapper around ViewData.</li>
        <li><strong>Hidden Fields</strong> - Stores values in HTML forms.</li>
        <li><strong>Distributed Cache (Redis)</strong> - Stores session data across multiple servers.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        ASP.NET Core provides Session, Cookies, TempData, ViewData, ViewBag, Hidden Fields, and Distributed Cache to maintain application and user state across requests.
    </div>
    `
},
"How do you implement Unit Testing in a .NET Core application?": {
    "answer": `
    <p>
        <strong>Unit Testing</strong> is the process of testing individual methods
        or classes in isolation to verify that they work correctly. In .NET Core,
        unit testing is commonly implemented using
        <strong>xUnit</strong>, <strong>NUnit</strong>, or
        <strong>MSTest</strong>. Dependencies such as databases or external APIs
        are mocked using frameworks like <strong>Moq</strong> so that only the
        business logic is tested.
    </p>

    <p><strong>Implementation Steps:</strong></p>

    <ul>
        <li>Create a separate Test Project.</li>
        <li>Use <strong>xUnit</strong> as the testing framework.</li>
        <li>Use <strong>Moq</strong> to mock dependencies.</li>
        <li>Write test cases using the <strong>AAA Pattern</strong> (Arrange, Act, Assert).</li>
        <li>Execute tests and verify the expected results.</li>
    </ul>

    <p><strong>xUnit Concepts:</strong></p>

    <ul>
        <li><strong>[Fact]</strong> - Used for a single test scenario.</li>
        <li><strong>[Theory]</strong> - Used for testing multiple input values.</li>
        <li><strong>Assert</strong> - Verifies the expected result.</li>
        <li><strong>Moq</strong> - Creates fake dependencies for isolated testing.</li>
    </ul>

    <p><strong>AAA Pattern:</strong></p>

    <ul>
        <li><strong>Arrange</strong> - Prepare test data and mock objects.</li>
        <li><strong>Act</strong> - Execute the method being tested.</li>
        <li><strong>Assert</strong> - Verify the expected output.</li>
    </ul>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        Suppose an <strong>EmployeeService</strong> retrieves employee data using
        <strong>IEmployeeRepository</strong>. During unit testing, the repository
        is replaced with a <strong>Mock (Moq)</strong> instead of connecting to
        SQL Server. This allows testing only the business logic, making tests
        fast, reliable, and independent of the database.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Testing business logic.</li>
        <li>Testing service and repository classes.</li>
        <li>Preventing regression bugs.</li>
        <li>Supporting CI/CD pipelines.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Unit testing in .NET Core is commonly implemented using xUnit with Moq to test business logic in isolation by mocking external dependencies.
    </div>
    `
},
"How do you work with Parallelism and Concurrency in .NET Core / C#?": {
    "answer": `
    <p>
        <strong>Concurrency</strong> is the ability of an application to handle
        multiple tasks at the same time, while <strong>Parallelism</strong> is the
        execution of multiple tasks simultaneously using multiple CPU cores.
    </p>

    <p>
        In .NET Core, <strong>Concurrency</strong> is commonly implemented using
        <code>Task</code>, <code>async/await</code>, and
        <code>Task.WhenAll()</code> for I/O-bound operations, whereas
        <strong>Parallelism</strong> is implemented using
        <code>Parallel.For()</code>, <code>Parallel.ForEach()</code>, or PLINQ
        for CPU-intensive operations.
    </p>

    <p><strong>Key Differences:</strong></p>

    <ul>
        <li><strong>Concurrency</strong> → Best for I/O-bound operations (API calls, Database, File I/O).</li>
        <li><strong>Parallelism</strong> → Best for CPU-bound operations (Image Processing, PDF Generation).</li>
        <li><strong>Concurrency</strong> → Uses <code>async/await</code> and <code>Task.WhenAll()</code>.</li>
        <li><strong>Parallelism</strong> → Uses <code>Parallel.ForEach()</code>.</li>
    </ul>

    <p><strong>Concurrency Example (Calling Multiple APIs):</strong></p>

    <pre><code class="language-csharp">
public async Task CreateOrder()
{
    var paymentTask = PaymentService.ProcessPaymentAsync();

    var inventoryTask = InventoryService.UpdateInventoryAsync();

    var emailTask = EmailService.SendEmailAsync();

    await Task.WhenAll(
        paymentTask,
        inventoryTask,
        emailTask);
}
    </code></pre>

    <p>
        <strong>Explanation:</strong><br>
        Instead of waiting for each API call to finish one by one,
        all three requests execute concurrently. The total execution
        time becomes approximately equal to the longest running task.
    </p>

    <p><strong>Parallelism Example (Processing Images):</strong></p>

    <pre><code class="language-csharp">
Parallel.ForEach(images, image =>
{
    Resize(image);
});
    </code></pre>

    <p>
        <strong>Explanation:</strong><br>
        Each CPU core processes different images simultaneously,
        reducing the total processing time.
    </p>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an e-commerce application, when an order is placed,
        <strong>Payment</strong>, <strong>Inventory</strong> and
        <strong>Email Notification</strong> can execute concurrently using
        <code>Task.WhenAll()</code>. However, if thousands of invoice PDFs
        need to be generated, <code>Parallel.ForEach()</code> is used to
        utilize multiple CPU cores.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li><strong>Concurrency</strong> - Calling multiple REST APIs.</li>
        <li><strong>Concurrency</strong> - Database operations.</li>
        <li><strong>Concurrency</strong> - Azure Blob Storage and Service Bus.</li>
        <li><strong>Parallelism</strong> - Image Processing.</li>
        <li><strong>Parallelism</strong> - PDF Generation.</li>
        <li><strong>Parallelism</strong> - Data Processing and Compression.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Use <code>async/await</code> with <code>Task.WhenAll()</code> for I/O-bound operations such as API and database calls, and use <code>Parallel.ForEach()</code> for CPU-intensive operations such as image or PDF processing.
    </div>
    `
},
"What is Health Check in ASP.NET Core?": {
    "answer": `
    <p>
        <strong>Health Checks</strong> in ASP.NET Core are used to monitor the
        health and availability of an application and its dependencies, such as
        databases, APIs, Redis, or Azure services.
    </p>

    <p>
        A health check endpoint allows monitoring tools, load balancers, or
        Kubernetes to verify whether the application is running correctly and
        ready to serve requests.
    </p>

    <p><strong>Common Health Checks:</strong></p>

    <ul>
        <li>SQL Server or Oracle database connectivity.</li>
        <li>Redis Cache availability.</li>
        <li>External API availability.</li>
        <li>Azure Service Bus connectivity.</li>
        <li>Disk space and memory checks.</li>
        <li>Application startup readiness.</li>
    </ul>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        Before routing traffic to an ASP.NET Core application, a load balancer
        or Kubernetes calls the <code>/health</code> endpoint. If the application
        returns <strong>Healthy (HTTP 200)</strong>, traffic is routed to it.
        Otherwise, requests are redirected to another healthy instance.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Health Checks in ASP.NET Core monitor the application's health and its dependencies, allowing monitoring tools to determine whether the application is ready to serve requests.
    </div>
<p><strong>How to Implement</strong></p><ul><li>Step 1: Register Health Checks &nbsp; &nbsp;builder.Services.AddHealthChecks();</li><li>Step 2: Map the Health Endpoint<br>&nbsp; app.MapHealthChecks("/health");</li></ul><p>Now you can access:</p><p>&nbsp; &nbsp; &nbsp; &nbsp; https://localhost:5001/health</p><p>If the application is healthy, it returns:</p>
    `
},
"What is AddHttpClient() in ASP.NET Core?": {
    "answer": `
    <p>
        <strong>AddHttpClient()</strong> is an extension method used to register
        and configure <code>HttpClient</code> with the built-in Dependency Injection
        container in ASP.NET Core. It is provided by the
        <strong>HttpClientFactory</strong>, which manages the creation and lifetime
        of HttpClient instances.
    </p>

    <p>
        Using <code>AddHttpClient()</code> helps prevent problems such as
        <strong>Socket Exhaustion</strong> and allows centralized configuration,
        logging, resiliency, and retry policies.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Calling external REST APIs.</li>
        <li>Communication between microservices.</li>
        <li>Centralized HttpClient configuration.</li>
        <li>Adding retry and timeout policies using Polly.</li>
        <li>Injecting HttpClient using Dependency Injection.</li>
    </ul>

    <p><strong>Registration:</strong></p>

    <pre><code>
builder.Services.AddHttpClient();
    </code></pre>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        AddHttpClient() registers HttpClientFactory in ASP.NET Core, providing efficient HttpClient management, dependency injection, and preventing socket exhaustion.
    </div>

    `
},
"What is Retry Policy and how do you implement it centrally in ASP.NET Core?": {
    "answer": `
    <p>
        A <strong>Retry Policy</strong> is a resiliency mechanism that automatically
        retries a failed operation before returning an error. It is commonly used
        for temporary failures such as network issues, timeouts, or HTTP 5xx errors.
    </p>

    <p>
        In ASP.NET Core, Retry Policies are typically implemented centrally using
        <strong>IHttpClientFactory</strong> with <strong>Polly</strong>. This avoids
        writing retry logic in every service and provides a single place to manage
        retries.
    </p>

    <p><strong>Benefits:</strong></p>

    <ul>
        <li>Handles transient failures automatically.</li>
        <li>Reduces duplicate retry code.</li>
        <li>Centralized configuration.</li>
        <li>Improves application reliability.</li>
        <li>Easy integration with HttpClientFactory.</li>
    </ul>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        Suppose an Order Service calls a Payment API. If the Payment API is
        temporarily unavailable (HTTP 500 or Timeout), the Retry Policy
        automatically retries the request before returning an error to the user.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Retry Policy automatically retries failed requests caused by transient failures and is centrally implemented in ASP.NET Core using HttpClientFactory and Polly.
    </div>
<p>
        A <strong>Retry Policy</strong> automatically retries failed requests caused
        by transient failures such as network issues, timeouts, or HTTP 5xx errors.
    </p>

    <p><strong>Centralized Registration:</strong></p>

    <pre><code class="language-csharp">
builder.Services
    .AddHttpClient&lt;IPaymentService, PaymentService&gt;()
    .AddPolicyHandler(GetRetryPolicy());
    </code></pre>

    <p><strong>Retry Policy:</strong></p>

    <pre><code class="language-csharp">
private static IAsyncPolicy&lt;HttpResponseMessage&gt; GetRetryPolicy()
{
    return HttpPolicyExtensions
        .HandleTransientHttpError()
        .WaitAndRetryAsync(
            3,
            retryAttempt => TimeSpan.FromSeconds(Math.Pow(2, retryAttempt))
        );
}
    </code></pre>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Retry Policy automatically retries transient failures and is commonly
        configured centrally using HttpClientFactory and Polly.
    </div>
    `
},
"How do you enable Cross-Origin Requests (CORS) in ASP.NET Core?": {
    "answer": `
    <p>
        <strong>Cross-Origin Resource Sharing (CORS)</strong> is a security feature
        that allows a web application hosted on one domain to access resources
        from another domain. By default, browsers block cross-origin requests to
        protect users from unauthorized access.
    </p>

    <p>
        In ASP.NET Core, CORS is enabled by defining a CORS policy using
        <code>AddCors()</code> and applying it in the request pipeline using
        <code>UseCors()</code>.
    </p>

    <p><strong>Implementation Steps:</strong></p>

    <ul>
        <li>Register a CORS policy using <code>AddCors()</code>.</li>
        <li>Specify allowed origins, headers, and HTTP methods.</li>
        <li>Enable the policy using <code>UseCors()</code> in <code>Program.cs</code>.</li>
    </ul>

    <p><strong>Code Example:</strong></p>

    <pre><code class="language-csharp">
// Register CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("MyPolicy", policy =>
    {
        policy.WithOrigins("https://myangularapp.com")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Enable CORS
app.UseCors("MyPolicy");
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        Suppose an Angular application is hosted on
        <strong>https://myangularapp.com</strong> and the ASP.NET Core Web API is
        hosted on <strong>https://api.company.com</strong>. Without CORS, the browser
        blocks API calls. After enabling CORS, the Angular application can securely
        access the Web API.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Angular or React calling ASP.NET Core APIs.</li>
        <li>Microservices accessed from different domains.</li>
        <li>Mobile applications consuming Web APIs.</li>
        <li>Third-party client integrations.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        CORS enables browsers to allow secure cross-origin requests by defining trusted origins, HTTP methods, and headers.
    </div>
    `
},
"How do you handle centralized error logging in ASP.NET Core?": {
    "answer": `
    <p>
        <strong>Centralized Error Logging</strong> is the process of capturing
        unhandled exceptions at a single location instead of writing
        <code>try-catch</code> blocks in every controller or service.
    </p>

    <p>
        In ASP.NET Core, centralized error handling is typically implemented
        using <strong>Global Exception Handling Middleware</strong> along with
        <strong>ILogger</strong> or logging frameworks such as
        <strong>Serilog</strong> or <strong>NLog</strong>.
    </p>

    <p><strong>Key Points:</strong></p>

    <ul>
        <li>Single place to handle all unhandled exceptions.</li>
        <li>Logs detailed error information.</li>
        <li>Returns a consistent error response to clients.</li>
        <li>Avoids duplicate try-catch blocks.</li>
        <li>Improves maintainability and debugging.</li>
    </ul>

    <p><strong>Implementation Example:</strong></p>

    <pre><code class="language-csharp">
// Program.cs

app.UseMiddleware&lt;ExceptionMiddleware&gt;();
    </code></pre>

    <pre><code class="language-csharp">
public class ExceptionMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger&lt;ExceptionMiddleware&gt; _logger;

    public ExceptionMiddleware(
        RequestDelegate next,
        ILogger&lt;ExceptionMiddleware&gt; logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task Invoke(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch(Exception ex)
        {
            _logger.LogError(ex, ex.Message);

            context.Response.StatusCode = 500;

            await context.Response.WriteAsync(
                "An unexpected error occurred.");
        }
    }
}
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        Suppose an Order API throws a SQL exception while saving an order.
        Instead of handling the exception in every controller,
        the Global Exception Middleware catches it, logs the error using
        <strong>ILogger</strong> or <strong>Serilog</strong>, and returns
        a standard HTTP 500 response to the client.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Logging database exceptions.</li>
        <li>Logging API failures.</li>
        <li>Logging unhandled application exceptions.</li>
        <li>Returning standardized error responses.</li>
        <li>Application monitoring and diagnostics.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Centralized error logging in ASP.NET Core is implemented using Global Exception Middleware with ILogger or Serilog to capture, log, and return consistent error responses for all unhandled exceptions.
    </div>
    `
},
"Difference between Scoped and Transient": {
    "answer": `
    <p>
        <strong>Scoped</strong> and <strong>Transient</strong> are service
        lifetimes used in ASP.NET Core Dependency Injection.
    </p>

    <p>
        A <strong>Scoped</strong> service is created <strong>once per HTTP request</strong>
        and shared throughout that request. A <strong>Transient</strong> service
        creates a <strong>new instance every time</strong> it is requested.
    </p>

    <p><strong>Key Differences:</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <th>Scoped</th>
            <th>Transient</th>
        </tr>

        <tr>
            <td>One instance per HTTP request.</td>
            <td>New instance every time it is requested.</td>
        </tr>

        <tr>
            <td>Shared within the same request.</td>
            <td>Never shared.</td>
        </tr>

        <tr>
            <td>Better for request-specific data.</td>
            <td>Best for lightweight, stateless services.</td>
        </tr>

        <tr>
            <td>Example: DbContext.</td>
            <td>Example: EmailService, PDFGenerator.</td>
        </tr>
    </table>

    <p><strong>Registration Example:</strong></p>

    <pre><code class="language-csharp">
// Scoped
builder.Services.AddScoped&lt;IEmployeeService, EmployeeService&gt;();

// Transient
builder.Services.AddTransient&lt;IEmailService, EmailService&gt;();
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        Suppose an Order API receives one HTTP request.
        If <strong>EmployeeService</strong> is registered as
        <strong>Scoped</strong>, every class within that request receives the
        same instance. If <strong>EmailService</strong> is registered as
        <strong>Transient</strong>, a new instance is created each time it is
        injected.
    </p>

    <pre><code class="language-text">
HTTP Request

Controller
     │
     ├── Service A
     └── Service B

Scoped
-------
EmployeeService
Same Instance

Transient
----------
EmailService
New Instance in Service A

New Instance in Service B
    </code></pre>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li><strong>Scoped</strong> - DbContext, Repository, Unit of Work.</li>
        <li><strong>Transient</strong> - Email Service, PDF Generator, Helper classes.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Scoped creates one instance per HTTP request, whereas Transient creates a new instance every time the service is requested.
    </div>
    `
},
"How would you design a URL Shortener in ASP.NET Core?": {
    "answer": `
    <p>
        A <strong>URL Shortener</strong> converts a long URL into a short,
        unique URL. When a user accesses the short URL, the application
        looks up the original URL in the database and redirects the user.
    </p>

    <p><strong>Implementation Steps:</strong></p>

    <ul>
        <li>Accept the original long URL.</li>
        <li>Generate a unique short code (e.g., Base62 or GUID).</li>
        <li>Store the mapping in the database.</li>
        <li>Return the shortened URL.</li>
        <li>On request, retrieve the original URL and redirect the user.</li>
    </ul>

    <p><strong>Architecture:</strong></p>

    <pre><code class="language-text">
Client
   │
   ▼
ASP.NET Core API
   │
Generate Short Code
   │
Store Mapping
   │
SQL Server / Redis
   │
Return Short URL
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        A user submits:
        https://www.mycompany.com/products/category/mobile/samsung/s24
        <br><br>
        The API generates:
        <strong>https://myurl.com/aB12Xy</strong>
        <br><br>
        When the user opens the short URL, the API retrieves the original
        URL from the database and returns an HTTP 301 or 302 redirect.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Bit.ly</li>
        <li>TinyURL</li>
        <li>Marketing Campaign Links</li>
        <li>QR Code Generation</li>
        <li>Social Media Links</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        A URL shortener generates a unique short code, stores the mapping between the short and original URL, and redirects users to the original URL when the short link is accessed.
    </div>
    `
},
"How do you create Custom Middleware in ASP.NET Core?": {
    "answer": `
    <p>
        <strong>Custom Middleware</strong> allows developers to execute custom
        logic before and after an HTTP request is processed. Middleware is part
        of the ASP.NET Core request pipeline and is commonly used for logging,
        exception handling, authentication, request validation, and auditing.
    </p>

    <p><strong>Steps to Create Custom Middleware:</strong></p>

    <ol>
        <li>Create a middleware class.</li>
        <li>Inject <code>RequestDelegate</code> into the constructor.</li>
        <li>Implement the <code>InvokeAsync()</code> method.</li>
        <li>Register the middleware in <code>Program.cs</code>.</li>
    </ol>

    <p><strong>Step 1 - Create Middleware Class</strong></p>

    <pre><code class="language-csharp">
public class RequestLoggingMiddleware
{
    private readonly RequestDelegate _next;

    public RequestLoggingMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        Console.WriteLine($"Request: {context.Request.Path}");

        await _next(context);

        Console.WriteLine($"Response Status: {context.Response.StatusCode}");
    }
}
    </code></pre>

    <p><strong>Step 2 - Register Middleware</strong></p>

    <pre><code class="language-csharp">
app.UseMiddleware<RequestLoggingMiddleware>();
    </code></pre>

    <p><strong>Request Pipeline</strong></p>

    <pre><code class="language-text">
Client
   │
   ▼
RequestLoggingMiddleware
   │
   ▼
Authentication Middleware
   │
   ▼
Authorization Middleware
   │
   ▼
Controller
   │
   ▼
Response
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In a banking application, a custom logging middleware records the
        request URL, HTTP method, response status code, execution time, and
        correlation ID for every request. These logs are stored in Application
        Insights for troubleshooting and auditing.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Global Exception Handling.</li>
        <li>Request and Response Logging.</li>
        <li>Authentication and Authorization.</li>
        <li>Performance Monitoring.</li>
        <li>Correlation ID Tracking.</li>
        <li>Custom Headers.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Custom Middleware is created by implementing an InvokeAsync() method that receives HttpContext, executes custom logic, calls the next middleware using RequestDelegate, and is registered in the ASP.NET Core request pipeline.
    </div>
    `
},
};
