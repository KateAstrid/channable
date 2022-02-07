Hello and welcome.

- `yarn install` to install packages;
- `yarn start` to run the application on /localhost:3000.

There are several things I have to mention:
- in channels' database there were two objects with identical keys. It turned out that `Meubles` channel had a wrong key. I fixed it.
- because of requirement `do not use any other libraries` I couldn't use any library to show real names of countries in dropdown; also I had to avoid using `lodash`, which has nice method `range` :) ;
- I deleted `Search` button, because I set searching channels function on every input change. I think it creates a simpler UX;
- I chose `flex` and `wrap` as a fast way to create responsible container, because there weren't any requirements about responsibility of a page. But if I had to do this, I suppose channels have to have a fixed size. So I would prefer to use `@media` on every column, so it would be five `@media` blocks.

