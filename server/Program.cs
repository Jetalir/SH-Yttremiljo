var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(o => o.AddPolicy("Client",
    p => p.WithOrigins("http://localhost:5173")
          .AllowAnyHeader()
          .AllowAnyMethod()));

var app = builder.Build();

app.UseCors("Client");

// Test
app.MapGet("/api/health", () => Results.Ok(new { status = "ok" }));

// Exempel POST (kontaktformulär utan DB)
app.MapPost("/api/contact", (ContactDto dto) =>
{
    // här hade du kunnat maila/logga etc.
    return Results.Ok(new { message = "Received", dto });
});

app.Run();

public record ContactDto(string Name, string Email, string Message);
