using DotNetReactZodApp.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace DotNetReactZodApp.Controllers;

[ApiController]
[Route("[controller]")]
public class UsersController : ControllerBase
{
    
    [HttpGet("AllUsers")]
    public List<UserViewModel> AllUsers()
    {
        var usersViewModels = TestDataGenerator.GetTestUsers();
        return usersViewModels.OrderBy(uvm => uvm.Name).ToList();
    }
}