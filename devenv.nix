{ pkgs, ... }:

{

  packages = with pkgs; [ 
    nodejs
    nodePackages.yarn
    nodePackages.prettier
    nodePackages.typescript
    nodePackages.typescript-language-server
  ];

  languages.typescript.enable = true;

  enterShell = with pkgs; ''
    echo Welcome To KampusGratis Shell
  '';

}
