using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace QuoteApp.Data
{
    public class Quote
    {
        [Key]
        [Required]
        public int QuoteId {get;set;}
        [Required]
        public string Title {get;set;} = "";
        public string Text {get;set;} = "";
        public string Source {get;set;} = "";
        public string Note {get;set;} = "";
        public string Tags {get;set;} = "";
        public DateTime Created { get; set; }
        public bool Private{get;set;}
        [NotMapped]
        public int Score {get;set;}
        
    }

    public static class Config
    {
        public static List<string> tagsSelection = new(){"故事", "課題", "語錄", "名詞", "資訊","經典"};
    }

}



