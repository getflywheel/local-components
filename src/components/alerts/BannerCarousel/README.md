BannerCarousel example:

```js
import Banner from '../Banner/Banner';

<BannerCarousel>
    <Banner variant="neutral" icon="warning" buttonText="Click Me!"
        buttonOnClick={() => console.log('buttonOnClick')}><strong>Typewriter!</strong> Poke selvage fam retro pug, offal
        butcher occupy banh mi artisan tousled.</Banner>
    <Banner variant="warning" icon="warning" buttonText="Click Me!"
        buttonOnClick={() => console.log('buttonOnClick')}><strong>Typewriter!</strong> Poke selvage fam retro pug, offal
        butcher occupy banh mi artisan tousled.</Banner>
    <Banner variant="error" icon="warning" buttonText="Click Me!"
        buttonOnClick={() => console.log('buttonOnClick')}><strong>Typewriter!</strong> Poke selvage fam retro pug, offal
        butcher occupy banh mi artisan tousled.</Banner>
    <Banner variant="success" icon="warning" buttonText="Click Me!"
        buttonOnClick={() => console.log('buttonOnClick')}><strong>Typewriter!</strong> Poke selvage fam retro pug, offal
        butcher occupy banh mi artisan tousled.</Banner>
</BannerCarousel>
```
