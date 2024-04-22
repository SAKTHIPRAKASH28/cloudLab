KVM:

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

