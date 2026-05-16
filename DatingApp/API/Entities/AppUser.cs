using API.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace API.Entities;

public class AppUser
{
    public string Id { get; set; } = Guid.NewGuid().ToString();

    public required string Displayname { get; set; }

    public required string Email { get; set; }

    public string? ImageUrl {get;set;}

    public required byte[] PasswordHash { get; set; }

    public required byte[] PasswordSalt { get; set; }

  //Nav Property

  public Member Member {get;set;}
}
