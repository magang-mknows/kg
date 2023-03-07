{ pkgs, ... }:

{

  packages = with pkgs; [ 
    nodePackages.yarn
    nodePackages.prettier
    nodePackages.typescript
  ];

  languages.typescript.enable = true;

  enterShell = with pkgs; ''
     echo Welcome to Kampus Gratis Shell!
     export PATH=~/.npm-packages/bin:$PATH
     export NODE_PATH=~/.npm-packages/lib/node_modules
  '';

}
