- 编译过程
1. 解析parse: 将代码解析生成抽象语法树（AST),即词法分析和语法分析过程
2. 转换: 对于AST进行一系列的操作，babel接受到的AST通过babel-traverse对其进行遍历，在此过程中进行添加，更新及删除等操作。
3. 生成: 将变化后的AST再转换为JS代码，使用的模板是babel-generator

