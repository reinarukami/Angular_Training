using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCWithAngular2.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult LastContact()
        {
            return View();
        }

        public ActionResult GetContact()
        {
            return View();
        }

        public ActionResult Login()
        {
            return View();
        }

        public ActionResult Employee()
        {
            return View();
        }

        public ActionResult Test()
        {
            return View();
        }
    }
}