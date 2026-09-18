using System;
using System.Security.Claims;
using API.DTOs;
using API.Entities;
using API.Interfaces;

namespace API.Extensions;

public static class ClaimsPrincipalExtensions
{
    public static string GetMemberId(this ClaimsPrincipal user)
    {
        return user.FindFirstValue(ClaimTypes.NameIdentifier) ?? throw new Exception("Cannot get member id from token");
    }
}
