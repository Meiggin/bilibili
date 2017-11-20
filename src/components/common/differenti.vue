<template>
	<div>
		<div class="animation rankplaying">
			<div class="rankplaying_l">
				<div class="svg">
					<svg id="icon-guanggao" viewBox="0 0 1024 1024" width="100%" height="100%"><path d="M584.3 90.2c36.4-36.4 147 15.3 247.1 115.5s151.8 210.8 115.5 247.1c-2 2-4.3 3.8-6.8 5.3-41.9 25.1-713.9 420.5-713.9 420.5s-25-5.6-54-34.6c-31.2-31.2-38.4-54.6-38.4-54.6S558.1 134.1 578.5 97.9c1.6-2.8 3.5-5.4 5.8-7.7z" fill="#9796ED"></path><path d="M133.7 789.4l0.6-0.9c-5.7 3.8-39.6 22.3-57.8 32.3-7.8 4.3-12.1 12.8-10.8 21.6 2.2 15.3 10 39.9 35.1 65 25.7 25.7 50.9 34.6 66.2 37.6 8.6 1.7 17.3-1.9 22-9.4 12-19 35.8-56.3 37.1-57 0 0-25-5.6-54-34.6-31.2-31.2-38.4-54.6-38.4-54.6z" fill="#9289F0"></path><path d="M584.3 90.2c36.4-36.4 147 15.3 247.1 115.5s151.8 210.8 115.5 247.1c-2 2-4.3 3.8-6.8 5.3-41.9 25.1-113.4 66.9-113.4 66.9s-71.2-4.7-193-126.6C519 283.8 508.9 207.9 508.9 207.9s44.6-68.7 69.6-110c1.7-2.8 3.5-5.4 5.8-7.7z" fill="#F7DF88"></path><path d="M699.719728 337.318615a256.4 93.1 44.999 1 0 131.660985-131.66558 256.4 93.1 44.999 1 0-131.660985 131.66558Z" fill="#8683EA"></path></svg>
					
				</div>
				<p class="rankP">广告</p>
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
	import animation from '@/data/i.json';
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