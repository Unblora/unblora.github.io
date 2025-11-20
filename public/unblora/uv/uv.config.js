self.__uv$config = {
    prefix: '/unblora/search/',
    bare:'/ub/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/unblora/uv/uv.handler.js',
    bundle: '/unblora/uv/uv.bundle.js',
    config: '/unblora/uv/uv.config.js',
    sw: '/unblora/uv/uv.sw.js',
};
