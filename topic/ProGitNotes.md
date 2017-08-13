# ProGit 读书笔记
## **[ProGit在线阅读链接](http://iissnan.com/progit/html/zh/ch2_3.html)**
# 1.起步
# 2.Git基础
## 2.1 取得项目的Git仓库
### 2.1.1 在工作目录中初始化新仓库  
git init
从工作目录里面直接输入上面的命令，可以让一个目录直接接受git的管理。
### 2.1.1 从现有仓库克隆  
git clone [url]
克隆一个仓库到本地
## 2.2 记录每次更新到仓库

## 2.3 查看提交记录
时间：[20170813]  

git log 如果不加任何参数，会按照时间列出所有更新，最新的更新排在最上面。
> 每次更新都有一个 SHA-1 校验和、作者的名字和电子邮件地址、提交时间  
>最后缩进一个段落显示提交说明。

**git log 无法退出！**  
解决方案：英文状态下，按下大写的 Q
shit！老子按ESC,CTRL-C,写exit都不行，居然是个Q  
**git log 无法显示中文/中文乱码**
解决方案：不要用CMD，要用git bash
***
参数
> -p 选项展开显示每次提交的内容差异  
> -2 则仅显示最近的两次更新
> --word-diff 。我们可以将其添加到 git log -p 命令的后面，从而获取单词层面上的对比（在书籍，论文的方面有特别用处）
> --stat 显示简要的增改行数统计
> --pretty 选项，可以指定使用完全不同于默认格式的方式展示提交历史。
>> 比如用 oneline 将每个提交放在一行显示，这在提交数很大时非常有用。  
>> 另外还有 short，full 和 fuller 可以用，展示的信息或多或少有些不同。是1行信息，2行信息，4行信息，这样子。  
>> format，可以定制要显示的记录格式，这样的输出便于后期编程提取分析，关于format的定义如下表<pre><code>选项	 说明
%H	提交对象（commit）的完整哈希字串
%h	提交对象的简短哈希字串
%T	树对象（tree）的完整哈希字串
%t	树对象的简短哈希字串
%P	父对象（parent）的完整哈希字串
%p	父对象的简短哈希字串
%an	作者（author）的名字
%ae	作者的电子邮件地址
%ad	作者修订日期（可以用 -date= 选项定制格式）
%ar	作者修订日期，按多久以前的方式显示
%cn	提交者(committer)的名字
%ce	提交者的电子邮件地址
%cd	提交日期
%cr	提交日期，按多久以前的方式显示
%s	提交说明</code></pre>
***
其他有用的选项和参数：
- --since/until:可以用时间
- --author 显示该作者的更新
- --graph 图形化的现实更新

**gitk** 图形化窗口

## 2.4 撤销操作

## 2.5 远程仓库使用
1. 查看远程仓库：git remote -v  
1.1 v 列出相应的克隆地址。如果有多个仓库，也会列出来。但是为什么会有多个仓库呢？这个需要我思考。
2. 添加一个远程仓库：git remote add [shortname] [url]  
2.1 利用shortname，可以直接fetch.例子：git fetch [shortname]
3. 从远程仓库抓取数据：git fetch [remote-name]  
3.1 fetch只拉回来，不合并
3.2 git pull，拉回来，并且merge到本地分支
3.3 git clone 本质上就是将master分支
4. 推动到远程仓库  
4.1  git push origin master:git push [remote-name] [branch-name]
5. 查看远程仓库信息  
5.1 git remote show [remote-name]  
6. 改名和删除远程仓库  
6.1 git remote rename [origin-name] [taget-name]
6.2 git remote rm [name]
## 2.6 打标签

## 2.7 技巧和窍门

## 2.8 小结