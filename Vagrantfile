Vagrant.configure("2") do |config|
  config.vm.box = "amoshydra/node6"
  config.vm.box_version = "0.0.1"

  config.vm.network :private_network, ip: "10.1.2.10"
  config.vm.hostname = "GameOfThrones"
  config.vm.synced_folder ".", "/home/vagrant/src", type: "nfs", create: true
  config.vm.provision "shell", inline: "cd /home/vagrant/src; npm install", privileged: false;
  
end
