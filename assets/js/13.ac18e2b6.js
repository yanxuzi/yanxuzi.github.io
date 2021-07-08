(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{523:function(t,p,s){"use strict";s.r(p);var n=s(6),e=Object(n.a)({},(function(){var t=this,p=t.$createElement,s=t._self._c||p;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("CentOS 7登录之后无法连接网络怎么办？第一次使用CentOS系统怎么连接网络呢？这就涉及到CentOS网络重置了，也就是CentOS 7无法连接网络的解决方法。接下来我们来看看CentOS重置网络的教程。")]),t._v(" "),s("p",[t._v("第一次使用CentOS系统发现无法连接网络的情况下，我们可以 ping 百度域名一下，会发现报错：Name or service not know。")]),t._v(" "),s("p",[t._v("接下来就可以通过重置网络的方法来解决CentOS 7无法连接网络的问题了。")]),t._v(" "),s("p",[t._v("1、输入dhclient，可以自动获取一个IP地址，再用命令ip addr查看IP")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raksmart.idcspy.com/wp-content/uploads/2020/09/1E@8CET0HMW6_41RHQ.png",alt:"查看IP"}})]),t._v(" "),s("p",[t._v("注意：这时候获取的IP是动态的，下次重启系统后，IP地址也会变化，这时候我们可以把系统的IP设置为静态的，设置步骤如下：")]),t._v(" "),s("p",[t._v("（1）点击VMware虚拟机左上角的“编辑”，选择“虚拟网络编译器”")]),t._v(" "),s("p",[t._v("（2）选中VMnet8（NAT模式），再点击右侧的“NAT设置”，如图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raksmart.idcspy.com/wp-content/uploads/2020/09/I77SNIVIHP53BXQGTW.png",alt:"获取静态IP"}})]),t._v(" "),s("p",[t._v("2、输入命令")]),t._v(" "),s("blockquote",[s("p",[t._v("vi /etc/sysconfig/network-scripts/ifcfg-enp3s0")])]),t._v(" "),s("p",[t._v("进入如下界面：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raksmart.idcspy.com/wp-content/uploads/2020/09/O7LTR1YDGWCZ1B6F7V.png",alt:"img"}})]),t._v(" "),s("p",[t._v("按 i 进入编辑状态，修改如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raksmart.idcspy.com/wp-content/uploads/2020/09/AXC26KW917RDU7H5G.png",alt:"编辑状态"}})]),t._v(" "),s("p",[t._v("更改完后，按“ESC”键，然后输入”:wq！”退出并保存。")]),t._v(" "),s("p",[t._v("3、重启网络，输入命令：")]),t._v(" "),s("blockquote",[s("p",[t._v("service network restart")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raksmart.idcspy.com/wp-content/uploads/2020/09/Y1ZBE0RUP@6M7K2BBDD.png",alt:"重启网络"}})]),t._v(" "),s("p",[t._v("此时再次 ping 百度域名就会发现ping 通了，到此CentOS网络设置完毕，接下来就可以正常连接网络上网了。")]),t._v(" "),s("p",[t._v("参考链接\nhttps://raksmart.idcspy.com/5325")])])}),[],!1,null,null,null);p.default=e.exports}}]);