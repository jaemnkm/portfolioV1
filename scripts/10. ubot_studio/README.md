# Ubot Studio

    URLS TO EMAILS - Ubot Studio

    change proxy("")
    add list to list(%urls,$list from file("dummy_urls.txt"),"Delete","Global")
    add list to list(%useragents,$list from file("dummy_useragents.txt"),"Delete","Global")
    set list position(%urls,0)
    set(#number,0,"Global")
    loop($list total(%urls)) {
        set user agent($random list item(%useragents))
        navigate($list item(%urls,#number),"Wait")
        wait for browser event("Everything Loaded","")
        click(<class="reply-button js-only">,"Left Click","No")
        wait for element(<class="reply-flap js-captcha">,"","Appear")
        add list to list(%emails,$list from text($page scrape("<p class=\"anonemail\">","</p>"),$new line),"Delete","Global")
        increment(#number)
        add item to list(%my numbers,#number,"Delete","Global")
    }
    save to file("emails.txt",$text from list(%emails,$new line))

[Back](https://jaemnkm.github.io/docs_redirect)