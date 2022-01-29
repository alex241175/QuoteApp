using System.ComponentModel.DataAnnotations;
namespace QuoteApp.Data;

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

}
