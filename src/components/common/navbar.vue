<template>
	<div class="navbar">
		<div class="header">
			<router-link to='/index' tag='a' class='logo'>
				<img src="//s1.hdslb.com/bfs/static/mult/images/logo.png" class="logoimg"/>
			</router-link>
			<div class="iconfontdiv">
				<i class='iconfont icon-search search'></i>
			</div>
			<a class=' account'></a>
			<a class="header-login">
				<p class="loginP">下载客户端</p>
			</a>
	</div>
	<div class="sidebar">
		<ul class="nav">
			<router-link to='/index' tag='li' activeClass='meiggin'>首页</router-link>
			<router-link to='/channel/a' tag='li' activeClass='meiggin'>动画</router-link>
			<router-link to='/channel/b' tag='li' activeClass='meiggin'>番剧</router-link>
			<router-link to='/channel/c' tag='li' activeClass='meiggin'>国创</router-link>
			<router-link to='/channel/d' tag='li' activeClass='meiggin'>音乐</router-link>
			<slot></slot>

		</ul>
	</div>
</div>
</template>
<style src='@/assets/iconfont/iconfont.css'>
	
</style>
<script>
	export default {

		name: 'navbar',

		data () {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	*{
		margin:0;
		padding:0;
		list-style: none;
	}
	html,body{
		width:100%;
		height:100%;
	}

.navbar{
		position: fixed;
		top:0;
		left:0;
		z-index:9999999999999999;
}
	.header{
		position: fixed;
		top:0;
		left:0;
		width:100%;
		height: 2.32267rem;
		padding: .27733rem 0;
		background:#fff;
		z-index: 91;
		.iconfontdiv{
			position: absolute;
			display: block;
			width: .996rem;
			height: .996rem;
			right: 45%;
			top: 35%;
			.search{
				display: block;
				width: 100%;
				height: 100%;
				fill: #aaa;
			}

		}
		.logo{
			position: absolute;
			display: block;
			left: 1.77867rem;
			top: 50%;
			width: 3.94533rem;
			transform: translateY(-50%);
			.logoimg{
				z-index: 2;
				position: relative;
				display: block;
				width: 100%;
				margin: auto;
			}
		}
		.header-login{
			position: absolute;
			display: block;
			top: 50%;
			-webkit-transform: translateY(-50%);
			right: .42667rem;
			width: 4.41333rem;
			height: 1.9rem;
			border: .02133rem solid #fb7299;
			border-radius: .17067rem;
			background-color: #fb7299;
			.loginP{
				font-size: .75467rem;
				line-height: 1.9rem;
				text-align: center;
				color: #fff;
				display:block;

			}
		}
		.account{
			position: absolute;
			display: block;
			width: 1.824rem;
			height: 1.824rem;
			right: 30.13%;
			top: 23px;
			border-radius: 50%;
			-webkit-transform: translateY(-50%);
			background: url(//static.hdslb.com/images/member/noface.gif) no-repeat;
			background-size: 100% 100%;
			overflow: hidden;
		}
	}
	.sidebar{
		position: relative;
		z-index: 9999;
		background-color: #fff;
		width: 100%;
		height: 1.87733rem;
		left:0;
		top:2.8rem;
		padding:0;
		.nav{
			position: absolute;
			background:#fff;
			height: 1.87733rem;
			white-space: nowrap;
			padding-bottom: .21333rem;
			display:flex;

			li{
				width: 3.86533rem;
				font-size: .89733rem;
				margin:0 0.18rem;
				line-height:  1.87733rem;

				text-align: center;
				color: #757575;
				border-bottom: .08533rem solid #fff;
			}
			.meiggin{
				color: #fb7299;
				border-bottom: .08533rem solid #fb7299;
			}
			i{
				width: 3.86533rem;
				margin-top:0.45rem;
			}
		}
	}

</style>