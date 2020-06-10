# lab11设计文档

19SS 张斐然 18307110244

## Question1

#### 1.使用Cookie

 `setcookie(name,value,expire,path,domain,secure);`
 
 该函数向浏览器发送了一个cookie。其中参数name必需，规定了cookie的名称。参数value必需，规定了cookie的值。
 参数expire、path、domain、secure都是可选的，分别规定了cookie的有效期、服务器路径、域名和是否通过安全的 HTTPS 连接来传输 cookie，
 ******
 ````
 $expiryTime = time()+60*60*24;
 setcookie("Username", $_POST['username'], $expiryTime);
 ````
 lab11中出现的该语句，设置了cookie名称为Username，值为用户上传的username值，并设置了
 cookie的有效期为一天。
 ******
 `setcookie("Username", "", -1);`  
 
 该语句将之前存储的cookie清零。
 ******
 调用`$_COOKIE["Username"]`可以访问名为 "Username" 的cookie的值，判断是否有用户的cookie存在。
 
#### 2.使用Session
 
 `session_start();`
 
 对session进行初始化。该函数创建了一个新会话，会话中自动地包含了cookie。
 ******
 `$_SESSION['Username']=$_POST['username'];`
 
 对会话中名称为Username的cookie进行赋值。
 ******
 调用`$_SESSION['Username']`可以访问cookie的值。
 ******
 `unset($_SESSION['Username']);`
 
 该语句重置了名为Username的cookie。
 


## Question2

1、cookie存储于客户端，而session存储于服务端。cookie较小，一般不会影响性能。
而session会在一定时间内保存在服务器上，当访问增多时，会影响服务器的性能。

2、在HTTP请求中，cookie是用明文传递的，并且因为cookie在客户端可能被伪造，因此cookie的安全性不是很可靠。

3、cookie的有效期可以手动设置，因此cookie可以长期有效。但session一旦关闭窗口就会失效。

4、cookie只能储存字符串，且有大小限制。而session中能够存储任何类型的数据，且无大小限制。


