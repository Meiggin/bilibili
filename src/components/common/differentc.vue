<template>
	<div>
		<div class="animation rankplaying">
			<div class="rankplaying_l">
				<div class="svg">
					<svg id="icon-guochuang" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M918.4 291.4C866.7 239 804.2 208.9 737 246.3c9.7-53 2.6-119.2-57.7-181.7 0 0-94 121-17.1 246.9-13.8 15.2-27.3 30.6-40.8 44.3-30 30.5 16.5 77.6 46.5 47.2 25.7-26.1 51.4-52.1 77.1-78.2 45.6-46.2 87-26.8 126.9 13.6 30 30.6 76.6-16.6 46.5-47z" fill="#58D598"></path><path d="M729.2 317.2c-84.1-85.3-220.5-85.3-304.6 0-20.5 20.8-35.8 44.7-46.4 70.2-72.3-0.1-144.6 27.8-199.7 83.7-110.1 111.7-110.1 292.8 0 404.5 110.1 111.7 288.7 111.7 398.9 0 55.1-55.9 82.7-129.2 82.6-202.5 25.1-10.7 48.7-26.3 69.2-47 84.1-85.3 84.1-223.6 0-308.9z" fill="#FF5C7A"></path><path d="M514.7 839.1c-84.6 82.6-219.2 80.1-300.7-5.7-81.5-85.7-79-222.2 5.6-304.9 0 0-50.5 135.8 49.4 240.9 113.3 119.3 245.7 69.7 245.7 69.7" fill="#F14767"></path></svg>
					
				</div>
				<p class="rankP">国创</p>
			</div>
			<ul>
				<li v-for='animdata in animation'>
					<div class="wrappic">
						<img :src='animdata.pic' class="rankImg">
						<div>
							<span class='rankPlaynum'>{{animdata.play}}</span>
							<span class='rankPts'>{{animdata.pts}}</span>
						</div>
					</div>
					<div class="title">
						<span>{{animdata.title}}</span>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import animation from '@/data/b.json';
	export default {
		name: 'differenta',
		data () {
			return {
				animation:[]
			}
		},
		created(){
			this.myanimation(animation.data.archives)
		},
		methods:{
			myanimation(anim){
				this.animation = anim
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