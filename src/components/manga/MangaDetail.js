import React, { Component } from 'react';
import { Card, CardImg, CardBody, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import StarRating from '../rating/Rating'
import './MangaDetail.css'

const items = [
    {
        src: 'https://i10.mangareader.net/dragon-ball-super/1/dragon-ball-super-5756356.jpg',
        altText: 'Page 1',
        caption: 'Page 1'
    },
    {
        src: 'https://i8.mangareader.net/dragon-ball-super/1/dragon-ball-super-5756358.jpg',
        altText: 'Page 2',
        caption: 'Page 2'
    },
    {
        src: 'https://i5.mangareader.net/dragon-ball-super/1/dragon-ball-super-5756360.jpg',
        altText: 'Page 3',
        caption: 'Page 3'
    },
    {
        src: 'https://i5.mangareader.net/dragon-ball-super/1/dragon-ball-super-5756362.jpg',
        altText: 'Page 4',
        caption: 'Page 4'
    },
    {
        src: 'https://i5.mangareader.net/dragon-ball-super/1/dragon-ball-super-5756364.jpg',
        altText: 'Page 5',
        caption: 'Page 5'
    },
    {
        src: 'https://i3.mangareader.net/dragon-ball-super/1/dragon-ball-super-5756366.jpg',
        altText: 'Page 6',
        caption: 'Page 6'
    },
    {
        src: 'https://i5.mangareader.net/dragon-ball-super/1/dragon-ball-super-5756368.jpg',
        altText: 'Page 7',
        caption: 'Page 7'
    },
    {
        src: 'https://i9.mangareader.net/dragon-ball-super/1/dragon-ball-super-5756370.jpg',
        altText: 'Page 8',
        caption: 'Page 8'
    },
    {
        src: 'https://i9.mangareader.net/dragon-ball-super/1/dragon-ball-super-5756372.jpg',
        altText: 'Page 9',
        caption: 'Page 9'
    },
    {
        src: 'https://i5.mangareader.net/dragon-ball-super/1/dragon-ball-super-5756374.jpg',
        altText: 'Page 10',
        caption: 'Page 10'
    },
    {
        src: 'https://i7.mangareader.net/dragon-ball-super/1/dragon-ball-super-5756376.jpg',
        altText: 'Page 11',
        caption: 'Page 11'
    },
    {
        src: 'https://i7.mangareader.net/dragon-ball-super/1/dragon-ball-super-5756378.jpg',
        altText: 'Page 12',
        caption: 'Page 12'
    },
    {
        src: 'https://i7.mangareader.net/dragon-ball-super/1/dragon-ball-super-5756380.jpg',
        altText: 'Page 13',
        caption: 'Page 13'
    },
    {
        src: 'https://i7.mangareader.net/dragon-ball-super/1/dragon-ball-super-5756382.jpg',
        altText: 'Page 14',
        caption: 'Page 14'
    },
    {
        src: 'https://i7.mangareader.net/dragon-ball-super/1/dragon-ball-super-5756384.jpg',
        altText: 'Page 15',
        caption: 'Page 15'
    }
];

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }



    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {

        const manga = this.props.manga.find(a => a.i === this.props.match.params.mangaId, 0) || {}

        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionText="" captionHeader={item.caption} className="caption" />
                </CarouselItem>
            );
        });

        return (
            <div className="details">

                <Card id={`manga--${manga.i}`} key={manga.i} className="detailCard">
                    <h1>{manga.t}</h1>
                    <CardImg top width="50%" src={manga.im} alt="Card image cap" />
                    <hr />
                    <CardBody>
                        <h2>{manga.d}</h2>
                        <br />
                        <br />
                        <br />
                        <StarRating {...this.props} />
                    </CardBody>
                </Card>

                <Carousel interval={false} activeIndex={activeIndex} next={this.next} previous={this.previous} className="detailCarousel">
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} className="detailCarousel" />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} className="detailCarousel" />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} className="detailCarousel" />
                </Carousel>

            </div>
        );
    }
}


export default Example;