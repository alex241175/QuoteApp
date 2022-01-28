namespace QuoteApp.Data
{
    public class StateContainerService
    {
        // The State property with initial value
        public string Query {get;set;} = "";
        public string Tag {get;set;} = "";
        public int Page {get;set;} = 1;
        public int ScrollPos { get; set; } = 0;

        // The event that will be raised for state changed
        public event Action OnStateChange;
     
        // The method that will be accessed by the sender component 
        // to update the state    
        public void SetQuery(string query)
        {
            Query = query;
            NotifyStateChanged();
        }
         public void SetTag(string tag)
        {
            Tag = tag;
            NotifyStateChanged();
        }
         public void SetPage(int page)
        {
            Page = page;
            NotifyStateChanged();
        }
        public void SetScrollPos(int scrollpos)
        {
            ScrollPos = scrollpos;
            NotifyStateChanged();
        }
 
        // The state change event notification
        private void NotifyStateChanged() => OnStateChange?.Invoke();


    }
}