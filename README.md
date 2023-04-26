<p align="center">
  <a href="https://roots.io/sage/">
    <img alt="Sage" src="https://cdn.roots.io/app/uploads/logo-sage.svg" height="100">
  </a>
</p>

<p align="center">
  <a href="https://packagist.org/packages/roots/sage">
    <img alt="Packagist Installs" src="https://img.shields.io/packagist/dt/roots/sage?label=projects%20created&colorB=2b3072&colorA=525ddc&style=flat-square">
  </a>

  <a href="https://github.com/roots/sage/actions/workflows/main.yml">
    <img alt="Build Status" src="https://img.shields.io/github/actions/workflow/status/roots/sage/main.yml?branch=main&logo=github&label=CI&style=flat-square">
  </a>

  <a href="https://twitter.com/rootswp">
    <img alt="Follow Roots" src="https://img.shields.io/badge/follow%20@rootswp-1da1f2?logo=twitter&logoColor=ffffff&message=&style=flat-square">
  </a>
</p>

<p align="center">Advanced WordPress starter theme with <del>Tailwind CSS</del> SASS/SCSS and Laravel Blade</p>
<p align="center">Adapted and edited by <a href="https://github.com/yCodeTech" target="_blank">@yCodeTech</a> for usage with <a href="https://laravel-mix.com/" target="_blank">Laravel Mix</a>.</p>

---

<p align="center">
  <a href="https://roots.io/sage/">Website</a> &nbsp;&nbsp; <a href="https://roots.io/sage/docs/installation/">Documentation</a> &nbsp;&nbsp; <a href="https://github.com/roots/sage/releases">Releases</a> &nbsp;&nbsp; <a href="https://discourse.roots.io/">Community</a>
</p>

## Overview

Sage is a WordPress starter theme with block editor support.

- Harness the power of [Laravel](https://laravel.com) and its available packages thanks to [Acorn](https://github.com/roots/acorn)
- Clean, efficient theme templating utilizing [Laravel Blade](https://laravel.com/docs/master/blade)
- Modern frontend development workflow powered by ~~[Bud](https://bud.js.org/)~~ [Laravel Mix](https://laravel-mix.com/)
- Out of the box support for ~~[Tailwind CSS](https://tailwindcss.com/)~~ [SASS](https://sass-lang.com/)
- Out of the box support for [log1x/sage-directives](https://github.com/log1x/sage-directives)

## Getting Started

~~See the [Sage installation documentation](https://roots.io/sage/docs/installation/).~~

This Laravel Mix adaptation of Sage 10 is for Bedrock installs. See the [Bedrock installation documentation](https://roots.io/bedrock/docs/installation/). The instructions below assumes you have knowledge of the Laravel Mix settings, and most other non-documented setting up steps.

1. Once Bedrock is installed, in the root directory, install [roots/acorn](https://github.com/roots/acorn) with `composer require roots/acorn`. Then add the following into the _scripts_ section of the _composer.json_

   ```json
   "post-autoload-dump": [
   	"Roots\\Acorn\\ComposerScripts::postAutoloadDump"
   ]
   ```

2. In the _themes_ directory either clone this repository or download the zip file and unzip it into the directory.

   - If cloning, you can specify the sage theme directory name in the git command, otherwise it will be the same name as this repo. Example:

     ```bash
     git clone git@github.com:yCodeTech/sage10-laravelmix.git sage-theme
     ```

     (Note: the theme name in WP will be _Sage 10 Theme_, unless it's changed in the style.css file.)

3. Do a `composer install` and a `npm install` in the new sage theme directory.
4. Activate the theme in wp-admin and start coding locally with Laravel Mix.

## Laravel Mix Commands

`npx mix watch` - Compile assets, watches the files for any changes, and start Browsersync session.

`npx mix --production` - Compile assets for production.

## Stay Connected

- Join us on Discord by [sponsoring us on GitHub](https://github.com/sponsors/roots)
- Participate on [Roots Discourse](https://discourse.roots.io/)
- Follow [@rootswp on Twitter](https://twitter.com/rootswp)
- Read the [Roots Blog](https://roots.io/blog/)
- Subscribe to the [Roots Newsletter](https://roots.io/newsletter/)

## Sponsors

Sage is an open source project and completely free to use. If you've benefited from our projects and would like to support our future endeavors, please consider [sponsoring Roots](https://github.com/sponsors/roots).

<div align="center">
<a href="https://k-m.com/"><img src="https://cdn.roots.io/app/uploads/km-digital.svg" alt="KM Digital" width="120" height="90"></a> <a href="https://carrot.com/"><img src="https://cdn.roots.io/app/uploads/carrot.svg" alt="Carrot" width="120" height="90"></a> <a href="https://wordpress.com/"><img src="https://cdn.roots.io/app/uploads/wordpress.svg" alt="WordPress.com" width="120" height="90"></a> <a href="https://pantheon.io/"><img src="https://cdn.roots.io/app/uploads/pantheon.svg" alt="Pantheon" width="120" height="90"></a> <a href="https://worksitesafety.ca/careers/"><img src="https://cdn.roots.io/app/uploads/worksite-safety.svg" alt="Worksite Safety" width="120" height="90"></a> <a href="https://www.copiadigital.com/"><img src="https://cdn.roots.io/app/uploads/copia-digital.svg" alt="Copia Digital" width="120" height="90"></a>  <a href="https://generodigital.com/"><img src="https://cdn.roots.io/app/uploads/genero.svg" alt="Genero" width="120" height="90"></a> <a href="https://40q.agency/"><img src="https://cdn.roots.io/app/uploads/40q.svg" alt="40Q" width="120" height="90"></a>
</div>
