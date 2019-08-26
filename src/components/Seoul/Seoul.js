export default {
    name: 'Seoul',
    data () {
        return {
            slides: [
                {
                    img:"https://leaveyourdailyhell.com/wp-content/uploads/2019/04/South-Korea.jpg",
                    title: "A Country Worth Visiting",
                    mark: "South Korea"
                },
                {
                    img:"https://images.unsplash.com/photo-1476711656344-4ffe053f6b2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
                    title: "Always Be The Most Friendly People",
                    mark: "People"
                },
                {
                    img:"https://cdn.pixabay.com/photo/2017/03/21/17/10/nightlife-2162772_960_720.jpg",
                    title: "The City That Never Sleeps",
                    mark: "Night life"
                },
                {
                    img:"https://cdn.pixabay.com/photo/2015/12/16/03/45/korea-1095361_960_720.jpg",
                    title: "The Cultural Spread In The Heart Of City",
                    mark: "Culture"
                },
                {
                    img:"https://cdn.pixabay.com/photo/2014/04/17/05/18/namdaemun-market-326146_960_720.jpg",
                    title: "The One Thing That You Can't Resist",
                    mark: "Food"
                }
            ],
            current: 0,
            percent: 0,
            timer: 0,
            interval: 0,
            progress: 0,
            duration: 5000,
            playslides: []
        }
    },
    computed: {
        style() {
          switch (this.current % 2) {
            case 0:
              return { top: "0" };
            case 1:
              return { top: "-100%" };
          }
        }
      },
      methods: {
        selectSlide(i) {
          this.current = i;
          this.playslides[this.current % 2] = this.slides[this.current];
          this.resetPlay();
        },
        process() {
          this.current++;
          if (this.current >= this.slides.length) {
            this.current = 0;
          }
          this.playslides[this.current % 2] = this.slides[this.current];
          this.resetPlay();
        },
        going() {
          let time = new Date().getTime();
          this.percent = Math.floor(100 * (time - this.timer) / this.duration);
        },
        resetPlay() {
          clearInterval(this.interval);
          clearInterval(this.progress);
          this.play();
        },
        stop() {
          clearInterval(this.interval);
          clearInterval(this.progress);
        },
        play() {
          this.timer = new Date().getTime();
          this.progress = setInterval(this.going, this.duration / 100);
          this.interval = setInterval(this.process, this.duration);
        }
      },
      created() {
        this.playslides[0] = this.slides[0];
        this.playslides[1] = this.slides[1];
        this.play();
      }
}