describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "TUVWXYZABCDEFGHIJKLMNOPQRS" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset -33', () => {
      assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", -33), "TUVWXYZABCDEFGHIJKLMNOPQRS");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz", 33), "hijklmnopqrstuvwxyzabcdefg");
    });

    it('debería retornar "tuvwxyzabcdefghijklmnopqrs" para "abcdefghijklmnopqrstuvwxyz" con offset -33', () => {
      assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz", -33), "tuvwxyzabcdefghijklmnopqrs");
    });

    it('debería retornar "3456789012" para "0123456789" con offset 33', () => {
      assert.equal(cipher.encode("0123456789", 33), "3456789012");
    });

    it('debería retornar "7890123456" para "0123456789" con offset -33', () => {
      assert.equal(cipher.encode("0123456789", -33), "7890123456");
    });

    it('debería retornar "-,." para "-,." con offset 33', () => {
      assert.equal(cipher.encode("-,.", 33), "-,.");
    });
});

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "TUVWXYZABCDEFGHIJKLMNOPQRS" con offset -33', () => {
      assert.equal(cipher.decode("TUVWXYZABCDEFGHIJKLMNOPQRS", -33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg", 33), "abcdefghijklmnopqrstuvwxyz");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "tuvwxyzabcdefghijklmnopqrs" con offset -33', () => {
      assert.equal(cipher.decode("tuvwxyzabcdefghijklmnopqrs", -33), "abcdefghijklmnopqrstuvwxyz");
    });

    it('debería retornar "0123456789" para "3456789012" con offset 33', () => {
      assert.equal(cipher.decode("3456789012", 33), "0123456789");
    });

    it('debería retornar "0123456789" para "7890123456" con offset -33', () => {
      assert.equal(cipher.decode("7890123456", -33), "0123456789");
    });

    it('debería retornar "-,." para "-,." con offset 33', () => {
      assert.equal(cipher.decode("-,.", 33), "-,.");
    });
});

});
