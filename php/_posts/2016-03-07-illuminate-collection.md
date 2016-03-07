---
title: Illuminate Collection
layout: post
tags:
  - php
  - functional
  - laravel
  - illuminate
---

## Install

```bash
composer require illuminate/support
```

## Condensed Collection instance methods

```php
<?php

use Illuminate\Support\Collection;

// class Illuminate\Support\Collection

// Instance methods:
string      __toString()
array       all()
mixed       avg(string|null $key = null)
Collection  chunk(int $size)
Collection  collapse()
bool        contains(mixed $key, mixed $value = null)
int         count()
Collection  diff(mixed $items)
Collection  diffKeys(mixed $items)
$this       each(callable $callback)
Collection  every(int $step, int $offset)
Collection  except(mixed $keys)
Collection  filter(callable $callback = null)
mixed       first(callable $callback = null, mixed $default = null)
Collection  flatMap(callable $callback)
Collection  flatten(int $depth = INF)
Collection  flip()
$this       forget(string|array $keys)
Collection  forPage(int $page, int $perPage)
mixed       get(mixed $key, mixed $default = null)
Collection  groupBy(callable|string $groupBy, bool $preserveKeys = false)
bool        has(mixed $key)
string      implode(string $value, string $glue = null)
Collection  intersect(mixed $items)
bool        isEmpty()
array       jsonSerialize()
Collection  keyBy(callable|string $keyBy)
Collection  keys()
mixed       last(callable $callback = null, mixed $default = null)
Collection  lists(string $value, string|null $key = null)
Collection  map(callable $callback)
mixed       max(string|null $key = null)
Collection  merge(mixed $items)
mixed       min(string|null $key = null)
bool        offsetExists(mixed $key)
mixed       offsetGet(mixed $key)
void        offsetSet(mixed $key, mixed $value)
void        offsetUnset(string $key)
Collection  only(mixed $keys)
Collection  pluck(string $value, string|null $key = null)
mixed       pop()
$this       prepend(mixed $value, mixed $key = null)
mixed       pull(mixed $key, mixed $default = null)
$this       push(mixed $value)
$this       put(mixed $key, mixed $value)
mixed       random(int $amount = 1)
mixed       reduce(callable $callback, mixed $initial = null)
Collection  reject(callable|mixed $callback)
Collection  reverse()
mixed       search(mixed $value, bool $strict = false)
mixed       shift()
Collection  shuffle()
Collection  slice(int $offset, int $length = null)
Collection  sort(callable $callback = null)
Collection  sortBy(callable|string $callback, int $options = SORT_REGULAR, bool $descending = false)
Collection  sortByDesc(callable|string $callback, int $options = SORT_REGULAR)
Collection  splice(int $offset, int|null $length = null, mixed $replacement = array())
mixed       sum(callable|string|null $callback = null)
Collection  take(int $limit)
array       toArray()
string      toJson(int $options)
$this       transform(callable $callback)
Collection  unique(string|callable|null $key = null)
Collection  values()
Collection  where(string $key, mixed $value, bool $strict = true)
Collection  whereIn(string $key, array $values, bool $strict = true)
Collection  whereInLoose(string $key, array $values)
Collection  whereLoose(string $key, mixed $value)
Collection  zip(mixed $items)
```

## Example: Loop Refactoring

```php
<?php

use Illuminate\Support\Collection;

$collection = new Collection([
  ['type' => 'Zero'], 
  ['type' => 'One'], 
  ['type' => 'Two'], 
  ['type' => 'Three'],
]);

$lookup_table = new Collection([
  'One': 1,
  'Two': 2,
  'Three': 3,
]);

$collection->map(function($item) use ($lookup_table) {
  return $lookup_table->get($item['type'], 0);
})->reduce(function($result, $item) {
  return $result + $item;
}, 0); // -> 6

$collection->sum(function($item) use ($lookup_table) {
  return $lookup_table->get($item['type'], 0);
}); // -> 6

```

## References

- https://packagist.org/packages/illuminate/support
- https://laravel.com/api/5.2/Illuminate/Support/Collection.html
- http://adamwathan.me/2015/01/01/refactoring-loops-and-conditionals/
