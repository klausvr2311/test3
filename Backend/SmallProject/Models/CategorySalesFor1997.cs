﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace SmallProject.Models
{
    [Table("CategorySalesFor1997")]
    public partial class CategorySalesFor1997
    {
        public string CategoryName { get; set; }
        public decimal? CategorySales { get; set; }
    }
}
