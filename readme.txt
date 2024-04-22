Additionals: cloud-lab-ten.vercel.app

1. Firebase (Used Firebase DB for CRUD and Firebase Auth): Use the files below, and use http-server (npm i -g http-server and http-server --open); for additionals use firebasse1.txt file in the same repo root below.
---
2. Cloud Analyst:

- Download the package from this link: http://www.cloudbus.org/cloudsim/CloudAnalyst.zip
- Unzip, and run the run.bat file inside it
- Run Simulation - Initial Output
- In Configure Simulation, go to Data Center Simulation
- Click on Add New, then on clicking that record -> Open Physical Hardware Details of Data Center
- Click on that ID value, then on copies to make -> use 20
- Then in Advanced, scroll down to find: Load balancing policy -> Alter that
- Main Configuration -> Application Deployment Configuration -> Add New in Service Broker Policy
- Save and Load the configuration
---
3. Open Stack:

- Open terminal
	Check Date and time are correct
- sudo nano /etc/resolv.conf
	nameserver 10.184.0.11
- sudo useradd -s /bin/bash -d /opt/stack -m stack
- sudo chmod +x /opt/stack
- sudo echo "stack ALL=(ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/stack
- sudo -u stack -i
- sudo apt install git sudo
- git clone https://opendev.org/openstack/devstack -b stable/zed
- cd devstack/
- nano local.conf
	[[local|localrc]]
	ADMIN_PASSWORD=admin
	DATABASE_PASSWORD=$ADMIN_PASSWORD
	RABBIT_PASSWORD=$ADMIN_PASSWORD
	SERVICE_PASSWORD=$ADMIN_PASSWORD

	HOST_IP=10.184.61.183 <Your Machine IP>
- ./stack.sh
- (If any errors) Remove os-testr==3.0.0
	nano /opt/stack/requirements/upper-constraints.txt
  ./stack.sh
---
4. Cloud Sim:
---
5. KVM:

--> KVM Installation
### Check for proper environment
egrep -c ' lm ' /proc/cpuinfo
uname –a
lsmod | grep kvm
ls /lib/modules/5.3.0-28-generic/kernel/arch/x86/kvm/kvm*
source proxy
apt-get update

-> package installation

1. sudo apt-cache search qemu-kvm
2. sudo apt-get install qemu-kvm libvirt-bin bridge-utils qemu-system virt-manager
(apt-get install qemu-kvm libvirt-bin)(apt-get install qemu-kvm libvirt-bin bridge-utils qemu-system virt-manager)

(if the above command doesn't work use this: sudo apt-get install qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils)

-->Libvirt Configuartion

1. sudo nano /etc/libvirt/libvirtd.conf
2. sudo service libvirtd restart
3. virsh list
4. virsh
	virsh # version
	virsh # nodeinfo

--> KVM Networking: 
A) NAT Network

1. virsh net-list --all
2. ip link show type bridge
3. ip link show master vibr0

B) Bridge Network

1. ip link add br0 type bridge (Adds a bridge)
2. sudo ip a | more
3. sudo ip link set ens3 up
4. sudo ip link set enp0s3 up
5. sudo ip link set enp0s3 master br0
6. ip address add dev br0 10.184.43.157/24 (assigning static ip)
7. sudo ip addr show br0
8. sudo ip addr flush dev ens3 (Flush IP addr from interface)
9. sudo ip link set br0 up promise on (Make the interfaces up)
10. sudo ip link set ens3 up
11. sudo ip route add default via 10.184.43.157

---
