{ pkgs, ... }: {
  packages = with pkgs; [
    packwiz
    jq
    curl
  ];

  languages.java = {
    enable = true;
    jdk.package = pkgs.jdk21;
  };
}