# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.

require "yaml"
current_folder = File.dirname(File.expand_path(__FILE__))
conf = YAML.load_file("#{current_folder}/config.vagrant.yml")

Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.hostname = conf["HOSTNAME"]
  config.vm.box = "ubuntu/trusty64"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  config.vm.network "private_network", ip: conf["PRIVATE_IP"]

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  config.vm.synced_folder conf["PROJECT_FOLDER"], "/project"

  config.hostmanager.enabled = true
  config.hostmanager.manage_host = true
  config.hostmanager.aliases = %w(conf["HOSTNAME"])

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
     vb.memory = conf["MEMORY"]
     vb.cpus = conf["CPU_COUNT"]
  end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Define a Vagrant Push strategy for pushing to Atlas. Other push strategies
  # such as FTP and Heroku are also available. See the documentation at
  # https://docs.vagrantup.com/v2/push/atlas.html for more information.
  # config.push.define "atlas" do |push|
  #   push.app = "YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME"
  # end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
   config.ssh.shell = "bash -c 'BASH_ENV=/etc/profile exec bash'"
   config.vm.provision "shell", inline: <<-SHELL


        APT_FILE="/etc/apt/sources.list"
        [ ! -e "${APT_FILE}.orig" ] && cp ${APT_FILE} ${APT_FILE}.orig
        sed -i 's,http://archive,http://ua.archive,g' ${APT_FILE}
        # Set our native time zone in VM
        ln -sf /usr/share/zoneinfo/Europe/Kiev /etc/localtime
        # mc repo
        echo "deb http://www.tataranovich.com/debian trusty nightly" > /etc/apt/sources.list.d/mc.list
        apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 76FB442E
        apt-get update
        apt-get install -y \
            mc \
            htop \
            apache2 \
            php5 php5-cli php5-mysql php5-mcrypt

        # addd rewrite_mode to the apach
        a2enmod rewrite

        #
        CONF="/etc/apache2/apache2.conf"
        if [ -e "${CONF}.orig" ]; then cp -f ${CONF}.orig ${CONF}; fi
        cp -f ${CONF} ${CONF}.orig
        echo "ServerName #{conf['HOSTNAME']}" >> ${CONF}
# Add
echo -e "\n\
<Directory /var/www/>\n\
    Options Indexes FollowSymLinks\n\
    AllowOverride All\n\
    Require all granted\n\
</Directory>" >> /etc/apache2/apache2.conf
        #
        service apache2 restart
        # Installing all php5 packages
        if [ ! -z "#{conf['ADDITIONAL_PACKAGES_LIST']}" ]; then
            apt-get install -y #{conf['ADDITIONAL_PACKAGES_LIST']}
            echo additional
        fi
        service apache2 restart
        if [ ! -h "/var/www/html" ]; then
            rm -Rf /var/www/html/
            ln -sf /project /var/www/html
        fi

   SHELL
   if conf["BACKUP_DATABASES"]
   config.trigger.before :destroy do
    info "Create databases backup into file [ "+conf["PROJECT_FOLDER"]+"/mysql_databases.sql ]"
    run_remote "bash -c \"mysqldump --events --all-databases > /project/mysql_databases.sql\""
   end
   config.trigger.before :halt do
    info "Create databases backup into file [ "+conf["PROJECT_FOLDER"]+"/mysql_databases.sql ]"
    run_remote "bash -c \"mysqldump --events --all-databases > /project/mysql_databases.sql\""
   end
   end
end
