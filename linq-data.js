window.data = window.data || {};
window.data.LINQ = {
  "Department-wise Maximum Salary using LINQ": {
    "answer": `
    <p>
        To find the highest-paid employee in each department, first group the
        employees by department using <code>GroupBy()</code>, then sort each
        group by salary in descending order and select the first employee.
    </p>

    <p><strong>Employee Class:</strong></p>

    <pre><code class="language-csharp">
public class Employee
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string Department { get; set; }

    public decimal Salary { get; set; }
}
    </code></pre>

    <p><strong>LINQ Query:</strong></p>

    <pre><code class="language-csharp">
var result = employees
    .GroupBy(e => e.Department)
    .Select(g => g
        .OrderByDescending(e => e.Salary)
        .First());
    </code></pre>

    <p><strong>Alternative (Using Max):</strong></p>

    <pre><code class="language-csharp">
var result = employees
    .GroupBy(e => e.Department)
    .Select(g => new
    {
        Department = g.Key,
        MaxSalary = g.Max(e => e.Salary)
    });
    </code></pre>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        Group the employees by department using GroupBy(), then use OrderByDescending() with First() or Max() to retrieve the highest salary for each department.
    </div>
    `
},
"Department-wise Maximum Salary using LINQ": {
    "answer": `
    <p>
        To find the highest-paid employee in each department, first group the
        employees by department using <code>GroupBy()</code>, then sort each
        group by salary in descending order and select the first employee.
    </p>

    <p><strong>Employee Class:</strong></p>

    <pre><code class="language-csharp">
public class Employee
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string Department { get; set; }

    public decimal Salary { get; set; }
}
    </code></pre>

    <p><strong>LINQ Query:</strong></p>

    <pre><code class="language-csharp">
var result = employees
    .GroupBy(e => e.Department)
    .Select(g => g
        .OrderByDescending(e => e.Salary)
        .First());
    </code></pre>

    <p><strong>Alternative (Using Max):</strong></p>

    <pre><code class="language-csharp">
var result = employees
    .GroupBy(e => e.Department)
    .Select(g => new
    {
        Department = g.Key,
        MaxSalary = g.Max(e => e.Salary)
    });
    </code></pre>

    <p><strong>Interview One-Liner:</strong></p>

    <div class="interview-answer">
        Group the employees by department using GroupBy(), then use OrderByDescending() with First() or Max() to retrieve the highest salary for each department.
    </div>
    `
},
"Querying Data with LINQ and Performance Optimization": {
    "answer": `
    <p>
        LINQ (Language Integrated Query) provides a type-safe and readable way
        to query data from collections, Entity Framework Core, XML, and other
        data sources. In Entity Framework Core, LINQ queries are translated
        into SQL and executed on the database.
    </p>

    <p><strong>Common LINQ Query Operations:</strong></p>

    <ul>
        <li>Filtering using <code>Where()</code>.</li>
        <li>Sorting using <code>OrderBy()</code> and <code>OrderByDescending()</code>.</li>
        <li>Selecting required columns using <code>Select()</code>.</li>
        <li>Grouping data using <code>GroupBy()</code>.</li>
        <li>Joining tables using <code>Join()</code>.</li>
        <li>Pagination using <code>Skip()</code> and <code>Take()</code>.</li>
    </ul>

    <p><strong>Performance Optimization Techniques:</strong></p>

    <ul>
        <li>Use <code>IQueryable</code> while building database queries.</li>
        <li>Use <code>AsNoTracking()</code> for read-only operations.</li>
        <li>Select only required columns using <code>Select()</code>.</li>
        <li>Apply filtering before calling <code>ToList()</code>.</li>
        <li>Implement pagination using <code>Skip()</code> and <code>Take()</code>.</li>
        <li>Avoid the N+1 Query Problem by using <code>Include()</code> or projection.</li>
        <li>Use asynchronous methods such as <code>ToListAsync()</code>.</li>
        <li>Avoid unnecessary <code>ToList()</code> calls in the middle of a query.</li>
    </ul>

    <p><strong>Optimized Example:</strong></p>

    <pre><code class="language-csharp">
var employees = await _context.Employees
    .AsNoTracking()
    .Where(e => e.Department == "IT")
    .Select(e => new
    {
        e.Id,
        e.Name,
        e.Salary
    })
    .OrderBy(e => e.Name)
    .Skip(0)
    .Take(20)
    .ToListAsync();
    </code></pre>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        In an Employee Search API with one million records, filtering,
        pagination, projection, and AsNoTracking() were used together.
        This reduced database load, network traffic, and memory usage,
        improving response time significantly.
    </p>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        For high-performance LINQ queries, I build queries using IQueryable, apply filtering before materializing data, use projection, AsNoTracking(), pagination, async methods, and avoid unnecessary data retrieval.
    </div>
    `
},
"Migrations and Handling Database Changes in Entity Framework Core": {
    "answer": `
    <p>
        <strong>Entity Framework Core Migrations</strong> is a feature that
        manages database schema changes in a controlled and versioned manner.
        Instead of manually writing SQL scripts for every change, EF Core
        generates migration files that can be applied consistently across
        Development, Test, and Production environments.
    </p>

    <p><strong>Migration Workflow:</strong></p>

    <ol>
        <li>Modify the Entity class or DbContext.</li>
        <li>Create a migration using <code>Add-Migration</code>.</li>
        <li>Review the generated migration code.</li>
        <li>Apply the migration using <code>Update-Database</code>.</li>
        <li>Deploy the migration to higher environments.</li>
    </ol>

    <p><strong>Common Commands:</strong></p>

    <pre><code class="language-bash">
Add-Migration AddDepartmentTable

Update-Database

Remove-Migration

Script-Migration
    </code></pre>

    <p><strong>Example:</strong></p>

    <pre><code class="language-csharp">
public class Employee
{
    public int Id { get; set; }

    public string Name { get; set; }

    public string Email { get; set; }   // Newly Added
}
    </code></pre>

    <p>
        Running <code>Add-Migration AddEmailColumn</code> generates a migration
        that adds the Email column to the Employees table.
    </p>

    <p><strong>Real-Time Example:</strong></p>

    <p>
        Suppose a new business requirement introduces a Department table.
        Developers update the entity model, generate a migration, validate it
        in Development and QA, and then apply the reviewed migration in
        Production during a deployment window.
    </p>

    <p><strong>Best Practices:</strong></p>

    <ul>
        <li>Review generated migrations before execution.</li>
        <li>Keep migrations small and focused.</li>
        <li>Test migrations in lower environments first.</li>
        <li>Back up the production database before applying schema changes.</li>
        <li>Use SQL migration scripts for production deployments when required.</li>
    </ul>

    <div class="interview-answer">
        <strong>Interview One-Liner:</strong>
        Entity Framework Core Migrations provide version-controlled database schema changes, allowing developers to evolve the database safely and consistently across environments.
    </div>
    `
},

};
