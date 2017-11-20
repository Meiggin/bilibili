<template>
<div class="rankplaying">
	<div class="rankplaying_l">
		<div class="svg">
			<svg id="icon-bianjituijian" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M839.4 877.5c0 33.7-28.9 61.1-64.7 61.1h-646c-35.8 0-64.7-27.4-64.7-61.1 0-122.1 124.9-236.3 252.5-281.2-73.7-43.1-123.3-119.6-123.3-207.5v-61.1c0-135 115.8-244.5 258.5-244.5s258.5 109.5 258.5 244.5v61.1c0 87.9-49.6 164.4-123.3 207.5 127.6 45 252.5 159.1 252.5 281.2z" fill="#42C9E8"></path><path d="M904 700.8h-82.6l8-18.6c16-34.6 15.6-63.7 2.7-85.2-13.8-23-39-26.6-52.4-25.8-5.2 0.3-9.7 3.3-12.4 7.8l-71.4 122h-65.7c-10.4 0-18.8 8.4-18.8 18.8v202.1c0 10.4 8.4 18.8 18.8 18.8h70.5v-0.3c0.3 0 0.5 0.2 0.8 0.2H880c26.6 0 50.6-18.6 53.3-45.3l26.6-141.2c0-29.3-23.9-53.3-55.9-53.3z" fill="#FFB161"></path><path d="M661.4 908.2c-11.1 0-20.1-9-20.1-20.1V753.7c0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1v134.5c0 11-9 20-20.1 20z" fill="#FDDE80"></path></svg> 
		</div>
		<p class="rankP">热门推荐</p>
	</div>
	<ul>
		<li v-for='rankdata in ranklist'>
			<div class="wrappic">
				<img :src='rankdata.pic' class="rankImg">
				<div>
					<span class='rankPlaynum'>{{rankdata.play}}</span>
					<span class='rankPts'>{{rankdata.pts}}</span>
				</div>
			</div>
			<div class="title">
				<span>{{rankdata.title}}</span>
			</div>
		</li>
	</ul>
</div>
</template>

<script>
	import rank from '@/data/tuijian.json';
	export default {
		name: 'different',
		data () {
			return {
				ranklist:[]
			}
		},
		created(){
			this.myranklist(rank.data.list)
		},
		methods:{
			myranklist(rank){
				this.ranklist = rank
			}
		}
	}
</script>

<style lang="scss" scoped>
	*{
		list-style: none;
		padding:0;
		margin:0;
	}
	.rankplaying{
		.rankplaying_l{

			width:100%;
			height:2.2rem;
		}
		.svg{
			padding-left:1.0rem;
			float: left;
			margin-top: .6528rem;
			width: 1.19467rem;
			height: .95573rem;
			svg{
				display: block;
				width: 100%;
				height: .95573rem;
			}
		}
		.rankP{
			float: left;
			margin-left: .10667rem;
			width: 4.41333rem;
			font-size: 0.98rem;
			line-height: 2.26133rem;
			text-align: left;
			color: #212121;
		}
		ul{

			width: 100%;

			padding-top: .08533rem;
			height: 21.92933rem;
			li{
				display: block;
				text-decoration: none;
				position: relative;
				width: 50%;
				float: left;
				margin-bottom: .68267rem;
				border-radius: 10%;
				.wrappic{
					position: relative;
					width: 10.532rem;
					height: 7.82267rem;
					overflow: hidden;
					display: block;
					margin: auto;
					background-color: #e7e7e7;
					z-index: 1;
					background-image: linear-gradient(transparent 50%,rgba(0,0,0,.5));
					.rankImg{
						position: absolute;
						top: 0;
						z-index: 2;
						display: block;
						width: 100%;
						height:100%;
						border-radius: 6%;
					}
				}
				.title{
					width: 7.232rem;
					position: relative;
					height: 2.36533rem;
					span{
						font-size: .59rem;
						color: #212121;
						line-height: .59rem;
						text-align: left;
					}
				}

			}
		}


	}
</style>