describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', () =>{
      assert.equal(cipher.encode(33 ,'ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('deberia retornar "C D" para "A B" con offset 2', () => {
      assert.equal(cipher.encode(2, 'A B'), 'C D');
    })
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',()=>{
      assert.equal(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG'),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
    it('deberia retornar "A B" para "C D" con offset 2', () => {
      assert.equal(cipher.decode(2, 'C D'), 'A B');
    })
  });


  /*describe('cipher.createCipherWithOffset', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.createCipherWithOffset, 'function');
    });

    it('debería retornar un objeto con dos funciones (encode y decode) con offset fijado');

  });*/

});
