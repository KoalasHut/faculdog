(function(){dust.register("index",body_0);var blocks={"body":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("layouts/master",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<h1>Hello, ").reference(ctx.get(["name"], false),ctx,"h").write("!</h1>");}return body_0;})();