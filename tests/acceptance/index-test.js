import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);

  test('generates origin-trial meta tags', async function(assert) {
    await visit('/');

    const tags = document.querySelectorAll('meta[http-equiv="origin-trial"]');

    assert.deepEqual(Array.from(tags).map(meta => meta.getAttribute('content')), [
      'TOKEN_X',
      'TOKEN_Y'
    ]);
  });
});
