function createRecipeHTML(recipeTitle, containsTitleImage, titleImageFileName, recipeGoal, recipeSteps){
            var htmlTags = '<!DOCTYPE html>'
                                +'\n<html>';

                var head = 
                         '\n    <head>'
                        +'\n        <title> ' + recipeTitle + ' - League Level 0</title>'
                        +'\n        <meta charset="UTF-8">'
                        +'\n        <meta name="viewport" content="width=device-width, initial-scale=1">'
                        +'\n        <link rel="stylesheet" href="https://league-central.github.io/curriculum/style/style.css">'
                        +'\n        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">'
                        +'\n        <link rel="icon" type="image/png" href="https://league-central.github.io/curriculum/img/favicon.png">'
                        +'\n        <script src="https://league-central.github.io/curriculum/script/headerAndFooter.js"></script>'
                        +'\n    </head>';
    
    
                var body = 
                         '\n    <body>'
                        +'\n        <div id ="wrap">'
                        +'\n            <div id ="main">'
                        +'\n                <div id="header">'
                        +'\n                    <script>addRecipeHeader();</script>'
                        +'\n                </div>'
                        +'\n                <div id = "recipePage">'
                        +'\n                    <div id="recipeTitle">'
                        +'\n                        <h1>'+recipeTitle+'</h1>'                                        
                        +'\n                        <hr>';
    
                if(containsTitleImage){
                    body+= '\n                        <img src="'+titleImageFileName+'" alt="'+recipeTitle+' image">'
                }
                                      
                body+=
                         '\n                    </div>'
                        +'\n                    <div id ="recipeBody">'
                        +'\n                        <div id="recipeGoal">'
                        +'\n                            <h2>Goal:</h2>'
                        +'\n                            <p id="goal">'
                        +'\n                                '+recipeGoal
                        +'\n                            </p>'
                        +'\n                        </div>'
                        +'\n                        <div id="recipeSteps">'
                        +'\n                            <h2>Steps:</h2>'
                        +'\n                            <ol id="stepList">'
                        +                                   formatRecipeSteps(recipeSteps)
                        +'\n                            </ol>'
                        +'\n                            <div style="clear:both;"></div>'
                        +'\n                        </div>'
                        +'\n                    </div>'
                        +'\n                </div>'
                        +'\n            </div>'
                        +'\n        </div>'
                        +'\n        <div id="footer">'
                        +'\n            <script>addRecipeFooter();</script>'
                        +'\n        </div>'
                        +'\n    </body>';   
    
                var closingHTMLTag = 
                        '</html>';
            

    return htmlTags + head + body + closingHTMLTag;
    }

function formatRecipeSteps(recipeStepsString){
    recipeStepsString = recipeStepsString.trim();
    recipeStepsString+="\n9.";   //this makes it so that the final step is caught by the regex
    var matches = recipeStepsString.match(/[1-9]?[0-9]\.\s(.+?\s+?)+?(?=(?!<pre[^>]*?>)[1-9]?[0-9]\.(?![^<]*?<\/pre>))/gm);
    var output = "";
    for(var i=0; i<matches.length; i++){
        matches[i] = matches[i].replace(/[1-9]?[0-9]\.\s+/gm, '');
        output+='\n                                <li>' + matches[i] + '                                </li>';
    }
    return output
}