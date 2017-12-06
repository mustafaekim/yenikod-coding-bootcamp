/* 
    The Singleton Pattern limits the number of instances of a particular object to just one. 
    This single instance is called the singleton.

    Singletons are useful in situations where system-wide actions need to be coordinated from a single central place

    Scenario:
        * You MAY need an object of a kind (you may not, who knows? : lazy loading)
        * You want to ensure that only one instance of that object exists for the entire program
        * You may prefer to manage the life-cycle of the singleton instance (instantiate, return existing instance, delete)
        * You may prefer to keep the integrity of the singleton through encapsulation
*/