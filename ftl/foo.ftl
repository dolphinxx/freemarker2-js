<html lang="en">
<head>
    <meta charset="UTF-8">
    <#if mobile!false><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"/></#if>
    <title>${title!''}</title>
</head>
<body>
<#include 'header.ftl'/>
<div>${((language == "french")!false)?then("Bonjor", "Hello")} ${name}!</div>

<ul>
    <#list items as item>
    <li>${item_index}.${item.value}@${item.date?string('yyyy-MM-dd HH:mm:ss')}</li>
    </#list>
</ul>
<#include 'footer.ftl'/>
</body>
</html>