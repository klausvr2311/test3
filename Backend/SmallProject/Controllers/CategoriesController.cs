using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SmallProject.Data;
using SmallProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmallProject.Controllers
{
    [Route("api/categories")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly nortWindContext _query;
        public Categories[] cate;
        public CategoriesController(nortWindContext query)
        {
            _query = query;
        }
        [HttpGet]
        public IEnumerable<Categories> Get()
        {
            return _query.Categories.ToList();
        }
        //get CategoriesByID
        [HttpGet]
        [Route("{id}")]
        public IEnumerable<Categories> GetCategoriesByID(int id)
        {
            cate = new Categories[] { _query.Categories.Find(id) };
            return cate;
        }
        //add Categories
        [HttpPost]
        public void PostCategories([FromBody] Categories categories)
        {
            _query.Add(categories);
            _query.SaveChanges();
        }

        [HttpPut("{id}")]
        public void UpdateCategories(int id, [FromBody] Categories categories)
        {
            
            if(id != categories.CategoryId)
            {

            }

            _query.Categories.Find(id).CategoryName = categories.CategoryName;
            _query.Categories.Find(id).Description = categories.Description;
            _query.Categories.Find(id).Picture = categories.Picture;
            _query.SaveChanges();
        }

        [HttpDelete("{id}")]
        public void DeleteCategories(int id)
        {

     
            _query.Categories.Remove(_query.Categories.Find(id));
            _query.SaveChanges();
        }

    }
}
