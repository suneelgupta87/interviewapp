window.data = window.data || {};
window.data.WEBAPI = {
  "How to Secure an ASP.NET Core Web API?": {
    "answer": `
    <p>
        Securing an ASP.NET Core Web API requires multiple layers of security.
        Authentication alone is not enough. A secure API should protect against
        unauthorized access, malicious input, data leakage, and denial-of-service attacks.
    </p>

    <p><strong>Best Practices to Secure a Web API:</strong></p>

    <ul>
        <li>Use HTTPS for all communication.</li>
        <li>Implement JWT or OAuth 2.0 authentication.</li>
        <li>Use Role-Based or Policy-Based Authorization.</li>
        <li>Validate all user input.</li>
        <li>Enable CORS only for trusted origins.</li>
        <li>Implement Rate Limiting to prevent abuse.</li>
        <li>Store secrets securely using Azure Key Vault.</li>
        <li>Never expose sensitive information in error messages.</li>
        <li>Use centralized exception handling and logging.</li>
        <li>Monitor APIs using Application Insights.</li>
    </ul>

    <p><strong>JWT Authentication Example:</strong></p>

    <pre><code class="language-csharp">
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer();
    </code></pre>

    <p><strong>Role-Based Authorization:</strong></p>

    <pre><code class="language-csharp">
[Authorize(Roles = "Admin")]
public IActionResult GetUsers()
{
    return Ok();
}
    </code></pre>

    <p><strong>Enable HTTPS:</strong></p>

    <pre><code class="language-csharp">
app.UseHttpsRedirection();
    </code></pre>

    <p><strong>Rate Limiting:</strong></p>

    <pre><code class="language-csharp">
builder.Services.AddRateLimiter(options =>
{
    options.AddFixedWindowLimiter("ApiPolicy", opt =>
    {
        opt.PermitLimit = 100;
        opt.Window = TimeSpan.FromMinutes(1);
    });
});
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In a Banking API, users authenticate using Microsoft Entra ID (Azure AD)
        and receive a JWT Access Token. APIs are accessed only over HTTPS.
        Admin APIs use Role-Based Authorization, secrets are stored in Azure
        Key Vault, and Application Insights monitors suspicious activities.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        A secure Web API uses HTTPS, JWT/OAuth authentication, authorization,
        input validation, rate limiting, secure secret management, centralized
        logging, and continuous monitoring.
    </div>
    `
},
  "What is Idempotency in REST API?": {
    "answer": `
    <p>
        <strong>Idempotency</strong> means that making the same API request
        multiple times produces the <strong>same result</strong> as making it
        once. Repeating the request does not create additional side effects.
    </p>

    <p>
        Idempotency is important in REST APIs to prevent duplicate operations,
        especially when requests are retried due to network failures or timeouts.
    </p>

    <p><strong>HTTP Methods and Idempotency:</strong></p>

    <ul>
        <li><strong>GET</strong> - Idempotent (retrieves data only).</li>
        <li><strong>PUT</strong> - Idempotent (updates the resource to the same state).</li>
        <li><strong>DELETE</strong> - Idempotent (deleting an already deleted resource has no additional effect).</li>
        <li><strong>POST</strong> - Not Idempotent (may create multiple resources if called repeatedly).</li>
        <li><strong>PATCH</strong> - Generally not idempotent unless specifically designed that way.</li>
    </ul>

    <p><strong>Implementation Example:</strong></p>

    <pre><code class="language-csharp">
// PUT API
PUT /api/employees/101

{
   "name":"John",
   "salary":50000
}
    </code></pre>

    <p>
        Calling the above PUT request multiple times keeps the employee
        information the same. The result does not change after the first update.
    </p>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an e-commerce application, if a payment request times out,
        the client may retry the request. Using an <strong>Idempotency Key</strong>
        ensures that the payment is processed only once, preventing duplicate
        transactions.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Payment APIs.</li>
        <li>Order creation.</li>
        <li>Money transfers.</li>
        <li>Inventory updates.</li>
        <li>Retry mechanisms in distributed systems.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        An idempotent API returns the same result even if the same request is executed multiple times, preventing duplicate operations.
    </div>
    `
},
"Can an API method return multiple responses?": {
    "answer": `
    <p>
        In ASP.NET Core Web API, a single HTTP request can receive
        <strong>only one HTTP response</strong>. Once a response is sent to the
        client, the request is completed and no additional response can be returned.
    </p>

    <p>
        If multiple operations need to be performed, they should be executed
        within the API, and their combined result should be returned in a single
        response object.
    </p>

    <p><strong>Key Points:</strong></p>

    <ul>
        <li>One HTTP Request → One HTTP Response.</li>
        <li>An API method cannot return multiple responses.</li>
        <li>Combine multiple results into a single response model.</li>
        <li>Use SignalR, WebSockets, or Server-Sent Events (SSE) if multiple updates are required.</li>
    </ul>

    <p><strong>Implementation Example:</strong></p>

    <pre><code class="language-csharp">
[HttpGet]
public IActionResult GetOrderDetails(int id)
{
    var order = orderService.GetOrder(id);
    var payment = paymentService.GetPayment(id);

    return Ok(new
    {
        Order = order,
        Payment = payment
    });
}
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an e-commerce application, when a client requests order details,
        the API may fetch information from multiple services such as Order,
        Payment, and Customer services. Instead of sending three separate
        responses, it combines all the data into a single JSON response.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Dashboard APIs.</li>
        <li>Order Details API.</li>
        <li>Profile APIs.</li>
        <li>Aggregate APIs in Microservices.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        In ASP.NET Core, one HTTP request always returns one HTTP response. If multiple pieces of data are required, they should be combined into a single response object.
    </div>
    `
},
"What is Session in ASP.NET Core Web API?": {
    "answer": `
    <p>
        <strong>Session</strong> is a server-side mechanism used to store
        user-specific data across multiple HTTP requests. Each user is assigned
        a unique Session ID, which is stored in a browser cookie and used to
        retrieve the session data from the server.
    </p>

    <p>
        Although ASP.NET Core supports Session in Web APIs, it is generally
        <strong>not recommended</strong> because REST APIs should be
        <strong>stateless</strong>. Instead, authentication is commonly handled
        using <strong>JWT Tokens</strong> or <strong>OAuth</strong>.
    </p>

    <p><strong>Key Points:</strong></p>

    <ul>
        <li>Session data is stored on the server.</li>
        <li>The browser stores only the Session ID.</li>
        <li>REST APIs should remain stateless.</li>
        <li>JWT is preferred over Session for Web APIs.</li>
    </ul>

    <p><strong>Implementation Example:</strong></p>

    <pre><code class="language-csharp">
// Register Session
builder.Services.AddDistributedMemoryCache();

builder.Services.AddSession();

app.UseSession();
    </code></pre>

    <pre><code class="language-csharp">
// Store value
HttpContext.Session.SetString("UserName", "John");

// Read value
string user = HttpContext.Session.GetString("UserName");
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In a traditional ASP.NET MVC application, Session can store
        user-specific information such as User ID, Shopping Cart, or Language
        Preference. However, in REST APIs, user information is typically carried
        in a JWT token instead of storing it in Session.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>ASP.NET MVC Applications.</li>
        <li>Shopping Cart.</li>
        <li>User Preferences.</li>
        <li>Temporary User Data.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Session stores user-specific data on the server, but it is generally not recommended for REST APIs because APIs should be stateless. JWT Tokens are the preferred approach.
    </div>
    `
},
"REST and RESTful API": {
    "answer": `
    <p>
        <strong>REST (Representational State Transfer)</strong> is an architectural
        style for designing distributed applications. It defines a set of principles
        for building scalable, stateless, and resource-based web services.
    </p>

    <p>
        A <strong>RESTful API</strong> is an API that follows the REST architectural
        principles, such as using standard HTTP methods, stateless communication,
        resource-based URLs, and appropriate HTTP status codes.
    </p>

    <p><strong>REST Principles:</strong></p>

    <ul>
        <li>Client-Server Architecture.</li>
        <li>Stateless Communication.</li>
        <li>Resource-Based URLs.</li>
        <li>Uses Standard HTTP Methods (GET, POST, PUT, DELETE).</li>
        <li>Supports Caching.</li>
        <li>Uniform Interface.</li>
    </ul>

    <p><strong>Implementation Example:</strong></p>

    <pre><code class="language-csharp">
// GET - Retrieve Employee
GET /api/employees/101

// POST - Create Employee
POST /api/employees

// PUT - Update Employee
PUT /api/employees/101

// DELETE - Delete Employee
DELETE /api/employees/101
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee Management System, the Employee resource is exposed
        through RESTful endpoints. Clients use HTTP methods like GET, POST,
        PUT, and DELETE to perform CRUD operations on employees.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Web APIs.</li>
        <li>Mobile Applications.</li>
        <li>Microservices Communication.</li>
        <li>Third-party API Integration.</li>
        <li>Cloud-based Applications.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        REST is an architectural style, while a RESTful API is an API that follows REST principles such as stateless communication, resource-based URLs, and standard HTTP methods.
    </div>
    `
},
"Common HTTP Status Codes in ASP.NET Core Web API": {
    "answer": `
    <p>
        <strong>HTTP Status Codes</strong> indicate the result of an HTTP request.
        They help the client understand whether the request was successful,
        failed, or requires additional action.
    </p>

    <p><strong>Status Code Categories:</strong></p>

    <ul>
        <li><strong>2xx</strong> - Success</li>
        <li><strong>3xx</strong> - Redirection</li>
        <li><strong>4xx</strong> - Client Errors</li>
        <li><strong>5xx</strong> - Server Errors</li>
    </ul>

    <p><strong>Common Status Codes:</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <th>Status Code</th>
            <th>Meaning</th>
            <th>Common Usage</th>
        </tr>

        <tr>
            <td>200 OK</td>
            <td>Request successful.</td>
            <td>GET, PUT</td>
        </tr>

        <tr>
            <td>201 Created</td>
            <td>New resource created successfully.</td>
            <td>POST</td>
        </tr>

        <tr>
            <td>204 No Content</td>
            <td>Request successful with no response body.</td>
            <td>DELETE, PUT</td>
        </tr>

        <tr>
            <td>400 Bad Request</td>
            <td>Invalid request or validation failed.</td>
            <td>Invalid input</td>
        </tr>

        <tr>
            <td>401 Unauthorized</td>
            <td>User is not authenticated.</td>
            <td>Missing or invalid JWT</td>
        </tr>

        <tr>
            <td>403 Forbidden</td>
            <td>User is authenticated but not authorized.</td>
            <td>Permission denied</td>
        </tr>

        <tr>
            <td>404 Not Found</td>
            <td>Requested resource does not exist.</td>
            <td>Record not found</td>
        </tr>

        <tr>
            <td>409 Conflict</td>
            <td>Resource conflict.</td>
            <td>Duplicate data</td>
        </tr>

        <tr>
            <td>500 Internal Server Error</td>
            <td>Unexpected server error.</td>
            <td>Unhandled exception</td>
        </tr>

        <tr>
            <td>503 Service Unavailable</td>
            <td>Service is temporarily unavailable.</td>
            <td>Maintenance or server overload</td>
        </tr>

    </table>

    <p><strong>Implementation Example:</strong></p>

    <pre><code class="language-csharp">
// 200 OK
return Ok(employee);

// 201 Created
return CreatedAtAction(nameof(GetById), new { id = employee.Id }, employee);

// 204 No Content
return NoContent();

// 400 Bad Request
return BadRequest("Invalid Request");

// 401 Unauthorized
return Unauthorized();

// 403 Forbidden
return Forbid();

// 404 Not Found
return NotFound();

// 409 Conflict
return Conflict("Employee already exists.");

// 500 Internal Server Error
return StatusCode(500, "Internal Server Error");
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee API:
        <br>• GET Employee → <strong>200 OK</strong>
        <br>• POST Employee → <strong>201 Created</strong>
        <br>• DELETE Employee → <strong>204 No Content</strong>
        <br>• Invalid Request → <strong>400 Bad Request</strong>
        <br>• Employee Not Found → <strong>404 Not Found</strong>
        <br>• Invalid JWT → <strong>401 Unauthorized</strong>
        <br>• No Permission → <strong>403 Forbidden</strong>
        <br>• Unhandled Exception → <strong>500 Internal Server Error</strong>
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>REST APIs</li>
        <li>Microservices</li>
        <li>Authentication & Authorization</li>
        <li>CRUD Operations</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        HTTP Status Codes indicate the outcome of an API request. The most commonly used codes are 200, 201, 204, 400, 401, 403, 404, 409, 500, and 503.
    </div>
    `
},
"Difference between PUT and PATCH": {
    "answer": `
    <p>
        Both <strong>PUT</strong> and <strong>PATCH</strong> are HTTP methods
        used to update resources in a REST API. The main difference is that
        <strong>PUT updates the entire resource</strong>, whereas
        <strong>PATCH updates only the specified fields</strong>.
    </p>

    <p><strong>Key Differences:</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <th>PUT</th>
            <th>PATCH</th>
        </tr>

        <tr>
            <td>Updates the entire resource.</td>
            <td>Updates only specific fields.</td>
        </tr>

        <tr>
            <td>Client sends the complete object.</td>
            <td>Client sends only the fields to update.</td>
        </tr>

        <tr>
            <td>Idempotent.</td>
            <td>Usually not idempotent (depends on implementation).</td>
        </tr>

        <tr>
            <td>Suitable for full updates.</td>
            <td>Suitable for partial updates.</td>
        </tr>
    </table>

    <p><strong>Implementation Example:</strong></p>

    <p><strong>PUT Request</strong></p>

    <pre><code class="language-json">
PUT /api/employees/101

{
    "id":101,
    "name":"John",
    "department":"IT",
    "salary":50000
}
    </code></pre>

    <p>
        The complete employee object is sent. Any omitted field may be overwritten.
    </p>

    <p><strong>PATCH Request</strong></p>

    <pre><code class="language-json">
PATCH /api/employees/101

{
    "salary":60000
}
    </code></pre>

    <p>
        Only the <strong>salary</strong> field is updated. All other fields remain unchanged.
    </p>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee Management System, if HR edits the entire employee profile,
        use <strong>PUT</strong>. If HR only updates the employee's salary or phone
        number, use <strong>PATCH</strong>.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li><strong>PUT</strong> - Complete profile update.</li>
        <li><strong>PATCH</strong> - Update email, phone number, salary, or status.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        PUT replaces the entire resource, whereas PATCH updates only the specified fields, making it more efficient for partial updates.
    </div>
    `
},
"Cross-Origin Requests (CORS) in ASP.NET Core API": {
    "answer": `
    <p>
        <strong>Cross-Origin Resource Sharing (CORS)</strong> is a browser
        security mechanism that allows a web application hosted on one
        domain to access resources hosted on another domain.
    </p>

    <p>
        By default, browsers enforce the <strong>Same-Origin Policy</strong>,
        which blocks requests between different domains, ports, or protocols.
        In ASP.NET Core, CORS is enabled by defining a policy using
        <code>AddCors()</code> and applying it using
        <code>UseCors()</code>.
    </p>

    <p><strong>Implementation Example:</strong></p>

    <pre><code class="language-csharp">
// Program.cs

builder.Services.AddCors(options =>
{
    options.AddPolicy("MyCorsPolicy", policy =>
    {
        policy.WithOrigins("https://myangularapp.com")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors("MyCorsPolicy");
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        Suppose your Angular application is hosted at
        <strong>https://myangularapp.com</strong> and your ASP.NET Core
        Web API is hosted at
        <strong>https://api.company.com</strong>.
        Without CORS, the browser blocks API requests because both
        applications are hosted on different domains.
        After configuring CORS, the browser allows the Angular application
        to call the Web API securely.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Angular, React or Vue applications consuming ASP.NET Core APIs.</li>
        <li>Microservices hosted on different domains.</li>
        <li>Mobile applications calling REST APIs.</li>
        <li>Third-party client integrations.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        CORS enables browsers to securely access APIs hosted on different domains by allowing trusted origins, HTTP methods, and headers.
    </div>
    `
},
"How do you improve the performance of a slow ASP.NET Core Web API?": {
    "answer": `
    <p>
        Improving Web API performance involves identifying the bottleneck and
        optimizing database access, application code, network communication,
        and infrastructure. The first step is to measure performance using
        profiling and monitoring tools before applying optimizations.
    </p>

    <p><strong>Performance Optimization Techniques:</strong></p>

    <ul>
        <li>Optimize SQL queries and add proper indexes.</li>
        <li>Use asynchronous programming (<code>async/await</code>).</li>
        <li>Implement caching (IMemoryCache / Redis Cache).</li>
        <li>Reduce unnecessary database calls.</li>
        <li>Use pagination for large datasets.</li>
        <li>Return only required fields using DTOs.</li>
        <li>Enable response compression.</li>
        <li>Use HttpClientFactory for external API calls.</li>
        <li>Execute independent API calls using <code>Task.WhenAll()</code>.</li>
        <li>Use Application Insights or logging to identify bottlenecks.</li>
    </ul>

    <p><strong>Implementation Example:</strong></p>

    <p><strong>Use Async Programming</strong></p>

    <pre><code class="language-csharp">
public async Task&lt;IEnumerable&lt;Employee&gt;&gt; GetEmployeesAsync()
{
    return await _context.Employees.ToListAsync();
}
    </code></pre>

    <p><strong>Use Caching</strong></p>

    <pre><code class="language-csharp">
var employees = await _cache.GetOrCreateAsync("Employees", async entry =>
{
    entry.AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(10);
    return await _context.Employees.ToListAsync();
});
    </code></pre>

    <p><strong>Run Independent API Calls Concurrently</strong></p>

    <pre><code class="language-csharp">
await Task.WhenAll(
    paymentService.ProcessPaymentAsync(),
    inventoryService.UpdateInventoryAsync(),
    emailService.SendEmailAsync());
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an e-commerce application, the Product API was taking 6 seconds
        because it queried the database for every request. We added Redis Cache,
        optimized SQL indexes, used async database calls, and implemented
        pagination. The response time improved from 6 seconds to less than
        500 milliseconds.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>High-traffic REST APIs.</li>
        <li>Microservices.</li>
        <li>E-commerce applications.</li>
        <li>Financial applications.</li>
        <li>Cloud-hosted APIs on Azure.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Improve Web API performance by optimizing database queries, using async programming, implementing caching, reducing unnecessary data transfer, executing independent tasks concurrently, and monitoring performance using Application Insights.
    </div>
    `
},
"Explain JWT Authentication implementation in ASP.NET Core Web API": {
    "answer": `
    <p>
        <strong>JWT (JSON Web Token)</strong> is a stateless authentication
        mechanism used to securely authenticate and authorize users in
        ASP.NET Core Web APIs. After successful login, the server generates
        a signed JWT token and returns it to the client. The client sends
        this token in the Authorization header with every subsequent request.
    </p>

    <p><strong>Implementation Steps:</strong></p>

    <ol>
        <li>User logs in with username and password.</li>
        <li>Server validates the user credentials.</li>
        <li>Server generates a JWT token containing user claims.</li>
        <li>Token is returned to the client.</li>
        <li>Client sends the token in the Authorization header.</li>
        <li>ASP.NET Core validates the token before executing the API.</li>
    </ol>

    <p><strong>Configure JWT Authentication:</strong></p>

    <pre><code class="language-csharp">
// Program.cs

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,

        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],

        IssuerSigningKey =
            new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
    };
});

builder.Services.AddAuthorization();
    </code></pre>

    <p><strong>Enable Authentication Middleware:</strong></p>

    <pre><code class="language-csharp">
app.UseAuthentication();
app.UseAuthorization();
    </code></pre>

    <p><strong>Protect API Endpoint:</strong></p>

    <pre><code class="language-csharp">
[Authorize]
[HttpGet]
public IActionResult GetEmployees()
{
    return Ok();
}
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee Management System, after a user logs in successfully,
        the server generates a JWT token. The Angular application stores
        the token and sends it with every API request. The Web API validates
        the token before allowing access to protected endpoints.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>ASP.NET Core Web APIs.</li>
        <li>Angular and React applications.</li>
        <li>Mobile applications.</li>
        <li>Microservices authentication.</li>
        <li>Cloud applications hosted on Azure.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        JWT provides stateless authentication by issuing a signed token after successful login. The client sends the token with every request, and ASP.NET Core validates it before granting access to protected APIs.
    </div>
    `
},
"Explain OAuth 2.0 in ASP.NET Core Web API": {
    "answer": `
    <p>
        <strong>OAuth 2.0</strong> is an industry-standard authorization
        framework that allows users to grant third-party applications limited
        access to protected resources without sharing their passwords.
    </p>

    <p>
        OAuth 2.0 separates <strong>authentication</strong> from
        <strong>authorization</strong>. It issues an <strong>Access Token</strong>,
        which the client sends with every API request to access protected
        resources.
    </p>

    <p><strong>OAuth 2.0 Flow:</strong></p>

    <ol>
        <li>User logs in to the Authorization Server.</li>
        <li>User grants permission to the client application.</li>
        <li>Authorization Server issues an Access Token.</li>
        <li>Client sends the Access Token to the Web API.</li>
        <li>Web API validates the token before returning data.</li>
    </ol>

    <p><strong>Implementation Example:</strong></p>

    <pre><code class="language-csharp">
// Program.cs

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Authority = "https://login.microsoftonline.com/{tenant-id}/v2.0";

        options.Audience = "api://employee-api";
    });

builder.Services.AddAuthorization();
    </code></pre>

    <pre><code class="language-csharp">
app.UseAuthentication();
app.UseAuthorization();
    </code></pre>

    <pre><code class="language-csharp">
[Authorize]
[HttpGet]
public IActionResult GetEmployees()
{
    return Ok();
}
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        Suppose an Angular application uses Microsoft Entra ID (Azure AD)
        for user login. After successful authentication, Entra ID issues an
        Access Token. The Angular application sends this token with every API
        request, and the ASP.NET Core Web API validates the token before
        returning employee data.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Microsoft Entra ID (Azure AD).</li>
        <li>Google Login.</li>
        <li>Facebook Login.</li>
        <li>GitHub Login.</li>
        <li>Microservices Authentication.</li>
        <li>Single Sign-On (SSO).</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        OAuth 2.0 is an authorization framework that allows secure access to protected APIs using Access Tokens without exposing user credentials.
    </div>
    `
},
"How do you handle millions of requests on an ASP.NET Core Web API?": {
    "answer": `
    <p>
        Handling millions of requests requires a combination of
        <strong>scalable architecture</strong>, <strong>performance optimization</strong>,
        <strong>caching</strong>, <strong>load balancing</strong>, and
        <strong>cloud infrastructure</strong>. The goal is to reduce response time,
        distribute traffic, and eliminate bottlenecks.
    </p>

    <p><strong>Scalability Techniques:</strong></p>

    <ul>
        <li>Use Load Balancers to distribute incoming requests.</li>
        <li>Deploy multiple API instances (Horizontal Scaling).</li>
        <li>Use Redis Cache to reduce database calls.</li>
        <li>Optimize SQL queries and add proper indexes.</li>
        <li>Use async/await for all I/O operations.</li>
        <li>Implement Response Compression.</li>
        <li>Use Pagination for large datasets.</li>
        <li>Offload long-running tasks to Azure Service Bus or Background Services.</li>
        <li>Use CDN for static content.</li>
        <li>Monitor performance using Application Insights.</li>
    </ul>

    <p><strong>Architecture Example:</strong></p>

    <pre><code class="language-text">
Users
   │
   ▼
Azure Load Balancer
   │
 ┌───────────────┬───────────────┐
 ▼               ▼               ▼
API Instance 1 API Instance 2 API Instance 3
      │               │               │
      └───────┬───────┴───────┬───────┘
              ▼
          Redis Cache
              │
              ▼
         SQL Server
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an e-commerce application during a festival sale, millions of users
        access the Product API simultaneously. Product data is served from
        Redis Cache, traffic is distributed across multiple API instances using
        Azure Load Balancer, and background tasks such as sending emails and
        updating inventory are processed asynchronously using Azure Service Bus.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>E-commerce websites.</li>
        <li>Banking applications.</li>
        <li>Ticket booking systems.</li>
        <li>Social media platforms.</li>
        <li>Microservices running on Azure or Kubernetes.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        To handle millions of requests, use horizontal scaling, load balancing, caching, asynchronous processing, database optimization, and cloud services such as Azure App Service, Redis Cache, Service Bus, and Application Insights.
    </div>
    `
},
"How will you handle duplicate API requests in Microservices?": {
    "answer": `
    <p>
        Duplicate API requests can occur due to network retries, client refresh,
        payment gateway callbacks, or retry policies. To prevent processing the
        same request multiple times, APIs should be designed to be
        <strong>idempotent</strong>.
    </p>

    <p><strong>Common Techniques:</strong></p>

    <ul>
        <li>Use an Idempotency Key.</li>
        <li>Store processed request IDs in the database or Redis.</li>
        <li>Use Unique Constraints on business keys.</li>
        <li>Implement optimistic concurrency where appropriate.</li>
        <li>Use distributed locks only when necessary.</li>
    </ul>

    <p><strong>Example API Request</strong></p>

    <pre><code class="language-http">
POST /api/orders

Headers:
Idempotency-Key: 12345-ABCDE

Body:
{
   "CustomerId":100,
   "ProductId":10,
   "Quantity":2
}
    </code></pre>

    <p><strong>ASP.NET Core Example</strong></p>

    <pre><code class="language-csharp">
var existingRequest = await _db.IdempotencyKeys
    .FirstOrDefaultAsync(x => x.Key == request.IdempotencyKey);

if(existingRequest != null)
{
    return Ok(existingRequest.Response);
}

var order = CreateOrder(request);

_db.IdempotencyKeys.Add(new IdempotencyKey
{
    Key = request.IdempotencyKey,
    Response = order.OrderId
});

await _db.SaveChangesAsync();

return Ok(order);
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        During online payment, if the customer clicks the "Pay Now" button
        multiple times or the payment gateway retries the request,
        the Idempotency Key ensures that only one order and one payment
        are processed.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        I handle duplicate API requests by implementing idempotency using an
        Idempotency Key, storing processed requests, enforcing database unique
        constraints, and ensuring repeated requests return the same result
        without creating duplicate data.
    </div>
    `
},
"What is API Versioning?": {
    "answer": `
    <p>
        <strong>API Versioning</strong> is the practice of maintaining multiple
        versions of an API so that existing clients continue to work while new
        features or changes are introduced without breaking backward compatibility.
    </p>

    <p>
        Instead of modifying an existing API that clients already use, a new
        version of the API is created. This allows old and new clients to
        coexist during the migration period.
    </p>

    <p><strong>API Versioning Flow</strong></p>

    <pre><code class="language-text">
                Client
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
     API v1               API v2
        │                     │
        ▼                     ▼
   Old Features        New Features
        │                     │
        └──────────┬──────────┘
                   ▼
                Database
    </code></pre>

    <p><strong>Types of API Versioning</strong></p>

    <ul>
        <li><strong>URL Versioning</strong> - /api/v1/products</li>
        <li><strong>Query String Versioning</strong> - /api/products?version=1.0</li>
        <li><strong>Header Versioning</strong> - api-version: 1.0</li>
        <li><strong>Media Type Versioning</strong> - Accept: application/json;version=1.0</li>
    </ul>

    <p><strong>ASP.NET Core Example (URL Versioning)</strong></p>

    <pre><code class="language-csharp">
[ApiController]
[ApiVersion("1.0")]
[Route("api/v{version:apiVersion}/products")]
public class ProductsController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok("Products API V1");
    }
}
    </code></pre>

    <p><strong>Advantages</strong></p>

    <ul>
        <li>Maintains backward compatibility.</li>
        <li>Allows gradual migration to newer APIs.</li>
        <li>Prevents breaking existing client applications.</li>
        <li>Supports multiple API versions simultaneously.</li>
        <li>Enables independent evolution of APIs.</li>
    </ul>

    <p><strong>Best Practices</strong></p>

    <ul>
        <li>Prefer URL versioning for public APIs because it is simple and explicit.</li>
        <li>Avoid changing or removing existing endpoints.</li>
        <li>Deprecate old API versions gradually.</li>
        <li>Document each API version clearly.</li>
        <li>Maintain backward compatibility whenever possible.</li>
    </ul>

    <p><strong>Real-Time Example</strong></p>

    <p>
        A mobile application uses <strong>API v1</strong>. Later, new business
        requirements require additional fields and functionality. Instead of
        modifying v1, a new <strong>API v2</strong> is released. Existing mobile
        users continue using v1, while new applications consume v2 until v1 is
        eventually retired.
    </p>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        API Versioning allows multiple versions of an API to coexist, ensuring
        backward compatibility while enabling new features without breaking
        existing client applications.
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
"Program.cs": {
    "answer": `
<pre><code class="language-csharp">
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using ECommerce.API.Data;
using ECommerce.API.Middlewares;
using ECommerce.API.Repositories;
using ECommerce.API.Services;

var builder = WebApplication.CreateBuilder(args);


//==================================================
// Logging
//==================================================

builder.Logging.ClearProviders();
builder.Logging.AddConsole();


//==================================================
// Configuration
//==================================================

var configuration = builder.Configuration;


//==================================================
// Database
//==================================================

builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(
        configuration.GetConnectionString("DefaultConnection"));
});


//==================================================
// Dependency Injection
//==================================================

builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IProductService, ProductService>();

builder.Services.AddScoped<ICategoryRepository, CategoryRepository>();
builder.Services.AddScoped<ICategoryService, CategoryService>();

builder.Services.AddScoped<IOrderRepository, OrderRepository>();
builder.Services.AddScoped<IOrderService, OrderService>();

builder.Services.AddScoped<ICustomerRepository, CustomerRepository>();
builder.Services.AddScoped<ICustomerService, CustomerService>();

builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();


//==================================================
// Memory Cache
//==================================================

builder.Services.AddMemoryCache();


//==================================================
// Distributed Cache (Redis)
//==================================================

// builder.Services.AddStackExchangeRedisCache(options =>
// {
//      options.Configuration = "localhost:6379";
// });


//==================================================
// Controllers
//==================================================

builder.Services.AddControllers();


//==================================================
// Swagger
//==================================================

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();


//==================================================
// JWT Authentication
//==================================================

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
.AddJwtBearer(options =>
{
    options.TokenValidationParameters =
        new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,

            ValidIssuer = configuration["Jwt:Issuer"],

            ValidAudience = configuration["Jwt:Audience"],

            IssuerSigningKey =
                new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(configuration["Jwt:Key"]))
        };
});


//==================================================
// Authorization
//==================================================

builder.Services.AddAuthorization();


//==================================================
// CORS
//==================================================

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});


//==================================================
// Rate Limiting (.NET 8)
//==================================================

//builder.Services.AddRateLimiter(...);


//==================================================
// Response Compression
//==================================================

builder.Services.AddResponseCompression();


//==================================================
// Health Checks
//==================================================

builder.Services.AddHealthChecks();


//==================================================
// HttpClient
//==================================================

builder.Services.AddHttpClient();


//==================================================
// Build App
//==================================================

var app = builder.Build();


//==================================================
// Middleware Pipeline
//==================================================


//--------------------------------------------------
// Global Exception Handler
//--------------------------------------------------

app.UseExceptionHandler("/error");


//--------------------------------------------------
// Swagger
//--------------------------------------------------

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();

    app.UseSwaggerUI();
}


//--------------------------------------------------
// HTTPS
//--------------------------------------------------

app.UseHttpsRedirection();


//--------------------------------------------------
// Static Files
//--------------------------------------------------

app.UseStaticFiles();


//--------------------------------------------------
// Response Compression
//--------------------------------------------------

app.UseResponseCompression();


//--------------------------------------------------
// CORS
//--------------------------------------------------

app.UseCors("AllowAngular");


//--------------------------------------------------
// Rate Limiting
//--------------------------------------------------

// app.UseRateLimiter();


//--------------------------------------------------
// Routing
//--------------------------------------------------

app.UseRouting();


//--------------------------------------------------
// Authentication
//--------------------------------------------------

app.UseAuthentication();


//--------------------------------------------------
// Authorization
//--------------------------------------------------

app.UseAuthorization();


//--------------------------------------------------
// Custom Request Logging Middleware
//--------------------------------------------------

app.UseMiddleware<RequestLoggingMiddleware>();


//--------------------------------------------------
// Health Check
//--------------------------------------------------

app.MapHealthChecks("/health");


//--------------------------------------------------
// Controllers
//--------------------------------------------------

app.MapControllers();

app.Run();
</code></pre>
`
},
"What is a Fallback Mechanism?": {
    "answer": `
<p>
    A <strong>Fallback Mechanism</strong> is a resiliency strategy that provides
    an alternative response or behavior when the primary operation fails. It
    ensures that the application continues to function gracefully instead of
    returning an error to the user.
</p>
<p><strong>Fallback Mechanism Flow</strong></p>

<pre><code class="language-text">
Primary Operation
        │
        ▼
   Success?
   ┌───────┴────────┐
   │                │
   ▼                ▼
Return Result   Fallback Operation
                    │
                    ▼
             Return Alternative Result
</code></pre>

<p><strong>Fallback Strategies:</strong></p>

<ul>
    <li>Return Cached Data</li>
    <li>Return Default Data</li>
    <li>Return Static Data</li>
    <li>Call an Alternative Service</li>
    <li>Return a Friendly Message</li>
</ul>
`
},
"DAST (Dynamic Application Security Testing) " :{
"answer": `
<p> DAST (Dynamic Application Security Testing) is a security testing technique where a running
 application or API is tested from the outside, just like a real attacker would.</p>
 <p><strong>What vulnerabilities does DAST detect?</strong></p>
 <ul>
     <li>SQL Injection</li>
     <li>Cross-Site Scripting (XSS)</li>
     <li>Broken Authentication</li>
     <li>Broken Authorization</li>
     <li>Command Injection</li>
     <li>Path Traversal</li>
     <li>XML External Entity (XXE)</li>
     <li>Server Security Misconfiguration</li>
     <li>Insecure Headers</li>
     <li>Information Disclosure</li>
     <li>Weak Session Management</li>
     <li>CSRF (for web applications)</li>
     <li>Open Redirects</li>
 </ul>
 <p><strong>DAST Testing Flow:</strong></p>
 <pre><code class="language-text">
 Application Running

↓

Burp Suite

↓

Capture HTTP Request

↓

Modify Request

↓

Send Multiple Payloads

↓

Analyze Response

↓

Generate Report
</pre></code>
`
},
};
