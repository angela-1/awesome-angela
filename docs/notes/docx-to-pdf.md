

# 批量转换 Word 文档（`docx/doc`）为 `pdf` 格式

工作中需要将多个分散在不同文件夹下的 `docx/doc` 文档转换为 `pdf` 格式，转换后的文件放在原文件相同路径下。

## 工具

- Total Commander
- 牵牛花（morning-glory）工具
- Python 3 


## 获取文件列表

Word 文档分散在各个文件夹内，通过 Total Commander 获取所有 Word 文档的完整路径。

```
folder:
+---hello
|       react.docx
|       vue.docx
|
\---world
        angular.docx
```

1. 使用 Total Commander 打开文档所在文件夹，使用“命令”-“展开所有文件夹”。
2. “显示”-“自定义类型”，设置 `*.doc*` 筛选出所有 Word 文档。
3. 右键选择要转换的 Word 文档，“标记”-“复制名称（包括完整路径）”，复制所有文件名。

```
d:\tmp\folder\world\angular.docx
d:\tmp\folder\hello\react.docx
d:\tmp\folder\hello\vue.docx
```

4. 将文件名列表粘贴到一个文本文件中，如 `sample.txt`。


## 转换成 `pdf` 格式

### 读取文件名列表

使用 Python 读取 `sample.txt` 文件，将文件名存入一个 `List`。

```python
def read_list():
    file = open("sample.txt", 'r', encoding='UTF-8')
    list = []
    for line in file:
        list.append(line)
    return list
```



### 依次处理单个文件

在 Python 中调用 Morning-glory 命令行程序，将单个 Word 文档转换为 `pdf` 格式。

```python
def docx2pdf(file_path, format):
    cmd = 'morning-glory.exe -f ' + format + ' "' + file_path + '"'
    subprocess.call(cmd)
```


## 后续操作

在完成转换后，视需求使用 Total Commander 将不需要的 Word 文档删除。


