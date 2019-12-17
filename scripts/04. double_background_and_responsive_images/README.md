# Double background-images and responsive 3 sizes images
Overlaying background-images, screen-size and image optimization.

# Overlaying background-images:
Using CSS you can overlay background-images over each other. This is great when you want to make bottom image a gif and the top has a low opacity so it is transparent. This allows you to edit the color of the gif without editing it. You can also load multiple gifs over each other as a background.

# Background-images screen-size optimization:
With CSS and Media Queries there are the following sizes for screens:

    /* Smartphones (portrait and landscape) ----------- */
    @media only screen 

    and (min-device-width : 320px) 
    and (max-device-width : 480px)

    /* Smartphones (landscape) ----------- */
    @media only screen 

    and (min-width : 321px)

    /* Smartphones (portrait) ----------- */
    @media only screen 

    and (max-width : 320px)

    /* iPads (portrait and landscape) ----------- */
    @media only screen 

    and (min-device-width : 768px) 
    and (max-device-width : 1024px)

    /* iPads (landscape) ----------- */
    @media only screen 

    and (min-device-width : 768px) 
    and (max-device-width : 1024px) 
    and (orientation : landscape)

    /* iPads (portrait) ----------- */
    @media only screen 

    and (min-device-width : 768px) 
    and (max-device-width : 1024px) 
    and (orientation : portrait)

    /* Desktops and laptops ----------- */
    @media only screen 

    and (min-width : 1224px)

    /* Large screens ----------- */
    @media only screen 

    and (min-width : 1824px)

In the images folder there are 8 of the same background(firstback) that are different sizes. The different between the firstbackbigcomp(1.02 MB) -> Large Screen(min-width : 1824px) and firstbackmobile1(66.7 KB) -> Smartphone(min-device-width : 320px) are that when the user views the website on a large desktop they will get the higher pixel/size image while on a smartphone they will get the lower pixel/size image. So the background-images are optimized toward specific devices which allows fastest load time while loading optimized image size by device.

# Images Optimization:
Picture is stretch across screen so according to the max-width of the screen it will load one of three sizes.

Small: max-width: 700px

Medium: max-width: 1400px

Large: min-width: 1401px

Example image:

Small: codepart1ver3.png (31.9 KB)

Medium: codepart1ver2.png (93.5 KB)

Large: codepart1ver1.png (256 KB)


# Advantages of optimizing images with CSS:
Images files are widely used in web development. To be able to optimize them would decrease the amount of data sent from the server to the client. This is especially useful when the user is using mobile. The user would download >100 KB instead of a 1 MB file while keeping good pixel quality. While a desktop user would download the 1 MB file instead of the >100 KB so they wouldn't have a pixelated image. 


# Source Code

    <!DOCTYPE html>
    <html>
    <head>
        <title>Double Background + Responsive 3 size images + Accordion</title>
        <meta charset="utf-8">
        <meta content="width=device-width,initial-scale=1, user-scalable=no" name="viewport">
    </head>

    <style>

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
        }

        article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
            display: block;
        }

        body {
            line-height: 1;
            height: 100%;
        }

        ol, ul {
            list-style: none;
        }

        blockquote, q {
            quotes: none;
        }

        blockquote:before, blockquote:after, q:before, q:after {
            content: '';
            content: none;
        }

        table {
            border-collapse
            : collapse;
            border-spacing: 0;
        }

        body {
            -webkit-text-size-adjust: none;
        }

    /* Image1 */

        .image1 {
            border: 0;
            display: inline-block;
            position: relative;
        }

            .image1:before {
                
                content: '';
                display: block;
                height: 100%;
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;
                background-size:cover;
            }

            .image1 img {
                display: block;
            }

            .image1.left {
                float: left;
                margin: 0 1.5em 1em 0;
                top: 0.25em;
            }

            .image1.right {
                float: right;
                margin: 0 0 1em 1.5em;
                top: 0.25em;
            }

            .image1.left, .image1.right {
                max-width: 40%;
            }

                .image1.left img, .image1.right img {
                    width: 100%;
                }

            .image1.fit {
                display: block;
                margin: 0 0 2em 0;
                width: 100%;
            }

                .image1.fit img {
                    width: 100%;
                }

            
    /* Smartphones (portrait and landscape) ----------- */
    @media only screen 
    and (min-device-width : 320px) 
    and (max-device-width : 480px) {
    /* Styles */


        html {
            background-color: #000;
            background-attachment: fixed,						fixed;
            background-image: url("images/overlay.png"), url("images/firstbackmobile1.png");
            background-position: center center,					center center;
            background-repeat: no-repeat,						no-repeat;
            
            -webkit-background-size: cover, cover;
    -moz-background-size:cover, cover;
    -o-background-size:cover, cover;
            background-size: cover, cover;
            
                height: 100%;
            
            
        }
    }


    /* Smartphones (landscape) ----------- */
    @media only screen 
    and (min-width : 321px) {
    /* Styles */
    html {
            background-color: #000;
            background-attachment: fixed,						fixed;
            background-image: url("images/overlay.png"), url("images/firstbackmobile1.png");
            background-position: center center,					center center;
            background-repeat: no-repeat,						no-repeat;
            
            -webkit-background-size: cover, cover;
    -moz-background-size:cover, cover;
    -o-background-size:cover, cover;
    background-size: cover, cover;
        
            height: 100%;
            
        }
    }

    /* Smartphones (portrait) ----------- */
    @media only screen 
    and (max-width : 320px) {
    /* Styles */
    html {
            background-color: #000;
            background-attachment: fixed,						fixed;
            background-image: url("images/overlay.png"), url("images/firstbackmobile1.png");
            background-position: center center,					center center;
            background-repeat: no-repeat,						no-repeat;
            
            -webkit-background-size: cover, cover;
    -moz-background-size:cover, cover;
    -o-background-size:cover, cover;
    background-size: cover, cover;
        
            height: 100%;
            
            
        }
    }





    /* iPads (portrait and landscape) ----------- */
    @media only screen 
    and (min-device-width : 768px) 
    and (max-device-width : 1024px) {
    /* Styles */

        html {
            background-color: #000;
            background-attachment: fixed,						fixed;
            background-image: url("images/overlay.png"), url("images/firstbacktab1.png");
            background-position: center center,					center center;
            background-repeat: no-repeat,						no-repeat;
            
            -webkit-background-size: cover, cover;
    -moz-background-size:cover, cover;
    -o-background-size:cover, cover;
    background-size: cover, cover;
        
            height: 100%;
            
        }
    }




    /* iPads (landscape) ----------- */
    @media only screen 
    and (min-device-width : 768px) 
    and (max-device-width : 1024px) 
    and (orientation : landscape) {
    /* Styles */
    html {
            background-color: #000;
            background-attachment: fixed,						fixed;
            background-image: url("images/overlay.png"), url("images/firstbacktab1.png");
            background-position: center center,					center center;
            background-repeat: no-repeat,						no-repeat;
            
            -webkit-background-size: cover, cover;
    -moz-background-size:cover, cover;
    -o-background-size:cover, cover;
    background-size: cover, cover;
        
            height: 100%;
            
            
        }
    }

    /* iPads (portrait) ----------- */
    @media only screen 
    and (min-device-width : 768px) 
    and (max-device-width : 1024px) 
    and (orientation : portrait) {
    /* Styles */
    html {
            background-color: #000;
            background-attachment: fixed,						fixed;
            background-image: url("images/overlay.png"), url("images/firstbacktab1.png");
            background-position: center center,					center center;
            background-repeat: no-repeat,						no-repeat;
            
            -webkit-background-size: cover, cover;
    -moz-background-size:cover, cover;
    -o-background-size:cover, cover;
    background-size: cover, cover;

            height: 100%;
            
            
        }
    }





    /* Desktops and laptops ----------- */
    @media only screen 
    and (min-width : 1224px) {
    /* Styles */
    
        html {
            background-color: #000;
            background-attachment: fixed,						fixed;
            background-image: url("images/overlay.png"), url("images/firstbackcomp1.png");
            background-position: center center,					center center;
            background-repeat: no-repeat,						no-repeat;
            
            -webkit-background-size: cover, cover;
    -moz-background-size:cover, cover;
    -o-background-size:cover, cover;
    background-size: cover, cover;
        
            height: 100%;
            
        }
    }

    /* Large screens ----------- */
    @media only screen 
    and (min-width : 1824px) {
    /* Styles */

        html {
            background-color: #000;
            background-attachment: fixed,						fixed;
            background-image: url("images/overlay.png"), url("images/firstbackcomp.png");
            background-position: center center,					center center;
            background-repeat: no-repeat,						no-repeat;
            
            -webkit-background-size: cover, cover;
    -moz-background-size:cover, cover;
    -o-background-size:cover, cover;
    background-size: cover, cover;
        
            height: 100%;
            
        }
    }

        
        
        
        
        
        
        
        
        
        
        
        html.is-loading body *, html.is-loading body *:before, html.is-loading body *:after {
            -moz-animation: none !important;
            -webkit-animation: none !important;
            -ms-animation: none !important;
            animation: none !important;
            -o-animation: none !important;
            
            -moz-transition: none !important;
            -webkit-transition: none !important;
            -ms-transition: none !important;
            transition: none !important;
            -o-transition: none !important;
        }

        html.is-touch {
            height: 100vh;
            overflow: hidden;
        }

            html.is-touch #wrapper {
                -webkit-backface-visibility: hidden;
                -webkit-overflow-scrolling: touch;
                -webkit-transform: translate3d(0, 0, 0);
                height: 100vh;
                overflow: auto;
            }
            
            
            
            
    </style>

    <body>
                                                    
    <span class="image1 fit">
        <picture>
            <source media="(max-width: 700px)" srcset="images/codepart1ver3.png 138w"> 
            <source media="(max-width: 1400px)" srcset="images/codepart1ver2.png 416w"> 
            <img src="images/codepart1ver1.png">
        </picture>
    </span>
                                            
    <span class="image1 fit">
        <picture>
            <source media="(max-width: 700px)" srcset="images/codepart2ver3.png 138w"> 
            <source media="(max-width: 1400px)" srcset="images/codepart2ver2.png 416w"> 
            <img src="images/codepart2ver1.png">
        </picture>
    </span>
                                                                    
    <span class="image1 fit">
        <picture>
            <source media="(max-width: 700px)" srcset="images/codepart3ver3.png 138w"> 
            <source media="(max-width: 1400px)" srcset="images/codepart3ver2.png 416w"> 
            <img src="images/codepart3ver1.png">
        </picture>
    </span>
                                            
    <span class="image1 fit">
        <picture>
            <source media="(max-width: 700px)" srcset="images/codepart4ver3.png 138w"> 
            <source media="(max-width: 1400px)" srcset="images/codepart4ver2.png 416w"> 
            <img src="images/codepart4ver1.png">
        </picture>
    </span>

    </body>
    </html>
    
[Back](https://jaemnkm.github.io/docs_redirect)