using Microsoft.EntityFrameworkCore;

namespace QuoteApp.Data
{
    public class Result
    {
        public int Key { get; set; }
        public int Rank { get; set; }
    } 

    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options ) : base (options)
        {

        }
        public IQueryable<Result> QuoteSearch(string Query) => FromExpression(()=> QuoteSearch(Query));


        // Specify DbSet properties etc
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // add your own configuration here
            modelBuilder.HasDbFunction(typeof(DatabaseContext).GetMethod(nameof(QuoteSearch))).HasName("udf_quote_search");
            modelBuilder.Entity<Result>().HasNoKey();
        }

        public DbSet<Quote> Quotes {get;set;}
        public DbSet<User> Users {get;set;}
        
    }
}