window.data = window.data || {};
window.data.ENTITYFRAMEWORK = {
  "How do you improve Entity Framework Core performance?": {
    "answer": `
    <p>
        Improving <strong>Entity Framework Core</strong> performance involves
        reducing database calls, retrieving only the required data, and using
        efficient querying techniques. The goal is to minimize execution time,
        memory usage, and database load.
    </p>

    <p><strong>Performance Optimization Techniques:</strong></p>

    <ul>
        <li>Use <code>AsNoTracking()</code> for read-only queries.</li>
        <li>Select only required columns using <code>Select()</code>.</li>
        <li>Implement pagination using <code>Skip()</code> and <code>Take()</code>.</li>
        <li>Avoid the N+1 Query Problem by using <code>Include()</code> or projection.</li>
        <li>Use asynchronous methods such as <code>ToListAsync()</code>.</li>
        <li>Add proper indexes on frequently searched columns.</li>
        <li>Use compiled queries for frequently executed queries.</li>
        <li>Use caching for frequently accessed data.</li>
        <li>Avoid loading unnecessary navigation properties.</li>
        <li>Execute multiple independent operations concurrently where appropriate.</li>
    </ul>

    <p><strong>Implementation Examples:</strong></p>

    <p><strong>Use AsNoTracking()</strong></p>

    <pre><code class="language-csharp">
var employees = await _context.Employees
    .AsNoTracking()
    .ToListAsync();
    </code></pre>

    <p><strong>Select Only Required Columns</strong></p>

    <pre><code class="language-csharp">
var employees = await _context.Employees
    .Select(e => new
    {
        e.Id,
        e.Name
    })
    .ToListAsync();
    </code></pre>

    <p><strong>Pagination</strong></p>

    <pre><code class="language-csharp">
var employees = await _context.Employees
    .Skip((page - 1) * pageSize)
    .Take(pageSize)
    .ToListAsync();
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee Management System, the employee table contained over
        one million records. Instead of loading all records, pagination was
        implemented, only the required columns were selected, and
        <code>AsNoTracking()</code> was used for read-only screens. This
        significantly reduced response time and memory usage.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Large datasets.</li>
        <li>High-traffic Web APIs.</li>
        <li>Reporting dashboards.</li>
        <li>Search and filter APIs.</li>
        <li>Read-only data screens.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Improve Entity Framework Core performance by using AsNoTracking(), selecting only required columns, implementing pagination, avoiding N+1 queries, using async methods, proper indexing, caching, and optimized queries.
    </div>
    `
},
"How do you read multiple result sets in Entity Framework Core?": {
    "answer": `
    <p>
        Entity Framework Core does not natively support mapping multiple
        result sets returned by a stored procedure. The recommended approach
        is to use the EF Core database connection with
        <code>DbCommand</code> and <code>DbDataReader</code>.
    </p>

    <p><strong>Implementation Steps:</strong></p>

    <ul>
        <li>Create a DbCommand from the EF Core database connection.</li>
        <li>Execute the stored procedure.</li>
        <li>Read the first result set.</li>
        <li>Call <code>NextResult()</code> to move to the next result set.</li>
        <li>Map each result set to its corresponding model.</li>
    </ul>

    <p><strong>Implementation Example:</strong></p>

    <pre><code class="language-csharp">
using var command = _context.Database.GetDbConnection().CreateCommand();

command.CommandText = "sp_GetDashboardData";
command.CommandType = CommandType.StoredProcedure;

_context.Database.OpenConnection();

using var reader = command.ExecuteReader();

// Result Set 1 - Employees
while (reader.Read())
{
    // Map Employee
}

// Result Set 2 - Departments
reader.NextResult();

while (reader.Read())
{
    // Map Department
}

// Result Set 3 - Projects
reader.NextResult();

while (reader.Read())
{
    // Map Project
}
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        A Dashboard API calls a single stored procedure that returns three
        result sets: Employees, Departments, and Projects. Instead of making
        three database calls, all required data is retrieved in one call,
        reducing database round trips and improving performance.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li>Dashboard APIs.</li>
        <li>Master-Detail screens.</li>
        <li>Reporting modules.</li>
        <li>Complex stored procedures returning multiple datasets.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Entity Framework Core does not directly support multiple result sets. The recommended approach is to use DbCommand and DbDataReader with NextResult() to read and map each result set.
    </div>
    `
},
"Difference between Lazy Loading and Eager Loading in Entity Framework": {
    "answer": `
    <p>
        <strong>Lazy Loading</strong> and <strong>Eager Loading</strong> are
        techniques used in Entity Framework to load related entities.
    </p>

    <p>
        <strong>Lazy Loading</strong> loads related data only when it is first
        accessed, whereas <strong>Eager Loading</strong> loads the related data
        together with the main entity in a single database query.
    </p>

    <p><strong>Key Differences:</strong></p>

    <table border="1" cellpadding="5" cellspacing="0">
        <tr>
            <th>Lazy Loading</th>
            <th>Eager Loading</th>
        </tr>

        <tr>
            <td>Loads related data on demand.</td>
            <td>Loads related data immediately.</td>
        </tr>

        <tr>
            <td>May execute multiple SQL queries.</td>
            <td>Usually executes a single SQL query using JOIN.</td>
        </tr>

        <tr>
            <td>Can lead to the N+1 Query Problem.</td>
            <td>Avoids the N+1 Query Problem.</td>
        </tr>

        <tr>
            <td>Suitable when related data is rarely needed.</td>
            <td>Suitable when related data is always required.</td>
        </tr>
    </table>

    <p><strong>Implementation Example:</strong></p>

    <p><strong>Eager Loading</strong></p>

    <pre><code class="language-csharp">
var employees = await _context.Employees
    .Include(e => e.Department)
    .ToListAsync();
    </code></pre>

    <p><strong>Lazy Loading</strong></p>

    <pre><code class="language-csharp">
var employee = await _context.Employees.FirstAsync();

var department = employee.Department;
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee Management System, if every employee record displayed
        on the screen also shows the department name, Eager Loading is the
        better choice. If the department details are displayed only when the
        user opens the employee details page, Lazy Loading can be used.
    </p>

    <p><strong>Common Use Cases:</strong></p>

    <ul>
        <li><strong>Eager Loading</strong> - Reports, dashboards, APIs returning related data.</li>
        <li><strong>Lazy Loading</strong> - Detail pages where related data is optional.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Eager Loading retrieves related data in a single query using Include(), whereas Lazy Loading retrieves related data only when it is accessed, which may result in additional database queries.
    </div>
    `
},

};
