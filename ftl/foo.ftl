<html lang="en">
<head>
    <meta charset="UTF-8">
    <#if mobile == true><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"/></#if>
    <title>${title!''}</title>
</head>
<body>
<#include 'header.ftl'/>
<div>${((language == "french")!false)?then("Bonjor", "Hello")} ${name}!</div>
<#include 'footer.ftl'/>
</body>
</html>