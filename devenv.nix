{ pkgs, ... }:

{

  packages = with pkgs; [ 
    nodejs
    nodePackages.yarn
    nodePackages.prettier
  ];

    enterShell = with pkgs; ''
     export PATH=~/.npm-packages/bin:$PATH
     export NODE_PATH=~/.npm-packages/lib/node_modules
   '';

}
