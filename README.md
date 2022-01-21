# 2022-1-20

### p177

组织 存储 管理数据

### p178 

mysql 开源免费

### p179

数据组织结构

数据库 database
数据表 table
数据行 row
字段 field

### p180 p181 p182 p183 p184 p185 p186 

无

# 2022-1-21

千锋教育最新MySQL全套教程，MySQL数据库基础+进阶教程，轻松入门MySQL数据库

https://www.bilibili.com/video/BV1qb4y1Y722?p=1

Java架构栈
mysql101

# p2

客户端工具
workbanch Navicat

可视化工具 Navicat

# p15

系统库 不用管

sql 分类

mysql
Tab 为上档键

# p19

DDL 数据定义语言

# p21

字符集 UTF-8

char 定长 不可变长度字符串

varchar 可变长度字符串

1个汉字两个字节
1个数字一个字节

stu_num 学号
char(8)
not null 必填
unique 唯一

stu_name 姓名
varchar(20)
not null 必填

stu_gender 性别
char(2)
not null 必填

stu_age 年龄
int
not null 必填

stu_tel 手机号
char(11)
not null 必填
unique 唯一

stu_qq qq
char(11)

unique 唯一

SELECT LENGTH('我是中国人'); 
SELECT CHAR_LENGTH('我是中国人'); 

字符：计算机中使用的字母、数字、字和符号，包括：1、2、3、a、b、c、~！•#￥%……—*（）——+等等，相当于这些东西的统称。所以，1个汉字字符会占用两个英文字符的位置，存储需要2个字节；1个英文字符存储只占一个英文字符的位置，存储需要1个字节；2个数字为一个字节。

https://blog.csdn.net/weixin_30465509/article/details/113453597

# p24

数值类型
int 
tinyint 1byte -128 - 127 特小型整数（年龄）
smallint                 小型整数
mediumint                中型整数
ininterage                整数
bigint                    大型

float
double
decimal(位数，小数位只有几位)

https://www.cnblogs.com/-xlp/p/8617760.html

# p25

字符类型

char       0-255           

Blob       Max:64K         图片转化为二进制字符串

# p26

日期类型
字符串类型不能查询 根据日期类型查询不便

Date

Date Time 用的最多

# p27

字段约束
为什么要有约束
保证数据的有效性
保证数据的完整性
保证数据的正确性

字段约束有哪些
非空约束 not null
唯一约束 unique
主键约束 非空+唯一 能够唯一标识数据表中的唯一一条数据
外键约束 建立不同表之间的关联

联合主键

### p33

中断

win 终端操作数据库必须带 ; 标识结束 ！！！

https://www.cnblogs.com/mhq-martin/p/9257033.html

https://www.jianshu.com/p/54b0c02b3810

https://www.cnblogs.com/muzimumu/p/11898748.html

### p1

「东哥的前端开发私房菜」Node.js入门 - 使用Express + Sequelize实作API

https://www.bilibili.com/video/BV1Zt411J7va?from=search&seid=15438410854250460297&spm_id_from=333.337.0.0

express 

koa

桌面软件开发
Electron


技术调查


https://clwy.cn/download

http://expressjs.com/en/starter/generator.html

express-generator

nodemon